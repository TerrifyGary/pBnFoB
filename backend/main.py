# main.py (FastAPI Backend)
from typing import List
from app.models import UserRegister
from fastapi import FastAPI,HTTPException # type: ignore
from fastapi.middleware.cors import CORSMiddleware
import oracledb

app = FastAPI()

# Database Connection Config
DB_USER = "SYSTEM"
DB_PASSWORD = "your_password"
DB_DSN = "localhost:1521/XEPDB1"  # Update this based on your Oracle DB

# Allow frontend to call the API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (for development)
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

# Create a connection pool for better performance
pool = oracledb.create_pool(
    user=DB_USER,
    password=DB_PASSWORD,
    dsn=DB_DSN,
    min=1,
    max=5,
    increment=1
)

@app.get("/")
def read_root():
    return {"message": "Hello from FastAPI!"}

@app.post("/useractions/signup/")
def signup(user: UserRegister):
    try:
        conn = pool.acquire()
        cursor = conn.cursor()

        sql = """
        INSERT INTO SYSTEM.UsersRegister (UserName, Email, Password)
        VALUES (:username, :email, :password)
        """
        cursor.execute(sql, [user.username, user.email, user.password])
        conn.commit()
        cursor.close()
        return {"message": "User registered successfully"}

    except oracledb.Error as e:
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")
    
@app.post("/useractions/getusers/", response_model=List[UserRegister])
def get_users(username: str, password: str):
    try:
        conn = pool.acquire()
        cursor = conn.cursor()

        sql = """
            SELECT t.ID , t.EMAIL , t.USERNAME , t.PASSWORD FROM SYSTEM.UsersRegister t
            WHERE t.USERNAME = :username AND t.PASSWORD = :password
        """
        cursor.execute(sql, [username, password])
        rows = cursor.fetchall()

        # Get column names for dictionary conversion
        column_names = [desc[0].lower() for desc in cursor.description]  # Convert to lowercase for consistency
        cursor.close()

        # Convert each row into a dictionary
        users = [dict(zip(column_names, row)) for row in rows]

        return users  # FastAPI will automatically convert it into a `List[UserRegister]`

    except oracledb.Error as e:
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")
