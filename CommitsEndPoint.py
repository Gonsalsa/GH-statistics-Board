import httpx
import os
from dotenv import load_dotenv

load_dotenv()

GITHUB_PAT = os.getenv("PAT")

def getRepoNames():
    headers = {"Authorization": f"Bearer {GITHUB_PAT}"}
    response = httpx.get("https://api.github.com/users/Gonsalsa/repos?per_page=100&sort=pushed", headers=headers)

    repoNames = []

    repos = response.json()

    for repo in repos:
        repoNames.append(repo["name"])

    return repoNames

def GetCommits():

    headers = {"Authorization": f"Bearer {GITHUB_PAT}"}

    all_Commits = []

    repos = getRepoNames()

    for repo in repos[:5]:
        response = httpx.get(f"https://api.github.com/repos/Gonsalsa/{repo}/commits?per_page=3", headers=headers)
        commits = response.json()

        print(type(commits))
        print(commits)

        if not isinstance(commits, list):
            continue

        for commit in commits:
            all_Commits.append({
                "repo": repo,
                "message": commit["commit"]["message"],
                "date": commit["commit"]["author"]["date"],
                "author": commit["commit"]["author"]["name"]
            })

    return all_Commits





