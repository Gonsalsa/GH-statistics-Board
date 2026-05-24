from fastapi import FastAPI
from pydantic import BaseModel, EmailStr
from Endpoints import BaseEndpoint
from Endpoints import LanguageEndpoint, ProfileEndpoints, RepoEndpoint, CommitsEndPoint
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=
    ["http://localhost:5173",
     "https://gh-statistics-backend-production.up.railway.app"],
    allow_methods=["*"],
    allow_headers=["*"],
)

#To start the api, write this in the terminal:
# uvicorn main:app --reload


class User(BaseModel):
    name: str
    email: EmailStr
    account_id: int

user = User(name="sebastian", email="sebastian@email.com", account_id=1)


@app.get("/")
def get_root():
    return BaseEndpoint.get_baseinfo()

@app.get("/api/GitHubInfo")
def get_github_info():
   return ProfileEndpoints.get_profile()

@app.get("/api/repos")
def get_repos():
    return RepoEndpoint.GetRepos()

@app.get("/api/commits")
def get_commits():
    return CommitsEndPoint.GetCommits()

@app.get("/api/languages")
def get_languages():
    return LanguageEndpoint.GetLanguage()