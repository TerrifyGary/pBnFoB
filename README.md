# 🥷 Ninja Registration System

A **black minimalist** and **Japanese ninja-style** user registration system, built with **FastAPI, Next.js, and OracleDB**. Users can securely sign up with their **shinobi name, secret email, and hidden password**.

---

## ⚡ Tech Stack
- **Frontend**: Next.js (React) 🕶️
- **Backend**: FastAPI (Python) ⚔️
- **Database**: OracleDB (PL/SQL) 🏯
- **Containerization**: Docker 🐳

---

## 🎯 Features
✅ **Ninja-Themed UI**: Dark, minimalist, and inspired by Japanese aesthetics.  
✅ **Secure User Registration**: Stores hashed passwords for safety.  
✅ **FastAPI with Swagger**: API documentation enabled for easy testing.  
✅ **OracleDB Integration**: Uses Dapper and SQLAlchemy to interact with the database.  
✅ **Containerized Deployment**: Each service runs in its own Docker container.  

---

## 🔧 Setup Instructions

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-repo/ninja-registration.git
cd ninja-registration
```

### 2️⃣ Setup OracleDB (Docker)
Create and run the OracleDB container:
```yaml
oracle-db:
  image: container-registry.oracle.com/database/express:21.3.0-xe
  container_name: oracle-db
  environment:
    ORACLE_PWD: "your_password"
    ORACLE_CHARACTERSET: "AL32UTF8"
  ports:
    - "1521:1521"
  volumes:
    - oracle-data:/opt/oracle/oradata
```
Run the container:
```sh
docker-compose up -d
```

### 3️⃣ Start the Backend (FastAPI)
```sh
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```
API Docs available at: [http://localhost:8000/docs](http://localhost:8000/docs) 📝

### 4️⃣ Start the Frontend (Next.js)
```sh
cd frontend
npm install
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to view the registration page.

---

## 🔗 API Endpoints

### **User Registration**
```http
POST /signup/
```
#### **Request Body** (JSON):
```json
{
  "username": "ShinobiMaster",
  "email": "ninja@hiddenvillage.com",
  "password": "shadowSecret"
}
```
#### **Response:**
```json
{
  "message": "User registered successfully"
}
```

### **Get User Details**
```http
POST /useractions/getusers/
```
#### **Request Body** (JSON):
```json
{
  "username": "ShinobiMaster",
  "email": "ninja@hiddenvillage.com",
  "password": "shadowSecret"
}
```
#### **Response:**
```json
{
  "users": [
    {
      "id": 21,
      "username": "ShinobiMaster",
      "email": "ninja@hiddenvillage.com"
    }
  ]
}
```

---

## 🚀 Deployment
To deploy with **Docker**, build and run the containers:
```sh
docker-compose up --build
```
For production, use **NGINX** as a reverse proxy and configure HTTPS. 🛡️

---

## 🎭 Screenshots
### **Dark Ninja Registration UI** 🥷
![Ninja Registration](./screenshots/ninja-ui.png)

---

## 📜 License
This project is licensed under the **MIT License**. Feel free to modify and improve! 🏯

---

## 🌊 Credits
Built with stealth and precision by **Your Name**. 🔥

---

