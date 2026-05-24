from fastapi import FastAPI
from Endpoints import BaseEndpoint
from Endpoints import LanguageEndpoint, ProfileEndpoints, RepoEndpoint, CommitsEndPoint
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=
    ["http://localhost:5173",
     "https://gh-statistics-backend-production.up.railway.app",
     "https://frontend-production-25a0.up.railway.app"
     ],
    allow_methods=["*"],
    allow_headers=["*"],
)

#To start the api, write this in the terminal:
# uvicorn main:app --reload


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