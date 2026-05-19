from fastapi import FastAPI
from pydantic import BaseModel, EmailStr


app = FastAPI()

#To start the api, write this in the terminal:
# uvicorn main:app --reload


class User(BaseModel):
    name: str
    email: EmailStr
    account_id: int

user = User(name="sebastian", email="sebastian@email.com", account_id=1)

print(user)

@app.get("/hello")
def hello():
    return user
