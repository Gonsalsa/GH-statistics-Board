from fastapi import FastAPI
from pydantic import BaseModel, EmailStr
import os
import GetProfile


app = FastAPI()

#To start the api, write this in the terminal:
# uvicorn main:app --reload


class User(BaseModel):
    name: str
    email: EmailStr
    account_id: int

user = User(name="sebastian", email="sebastian@email.com", account_id=1)

GITHUB_PAT = os.getenv("PAT")

@app.get("/api/GitHubInfo")
def get_github_info():
   return GetProfile.get_profile()