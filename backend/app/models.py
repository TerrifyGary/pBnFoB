from pydantic import BaseModel
# User Registration Model
class UserRegister(BaseModel):
    username: str
    email: str
    password: str  # In real apps, hash passwords before storing!
    id: int
