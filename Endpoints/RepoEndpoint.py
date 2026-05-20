
import httpx
import os
from dotenv import load_dotenv

load_dotenv()

GITHUB_PAT = os.getenv("PAT")

def GetRepos():
    headers = {"Authorization": f"Bearer {GITHUB_PAT}"}
    response = httpx.get("https://api.github.com/users/Gonsalsa/repos?per_page=100&sort=pushed", headers=headers)

    repos = response.json()

    repos.sort(key=lambda x: x["stargazers_count"], reverse=True)
    top_5 = repos[:5]

    result = []

    for repo in top_5:
        result.append({
        "name": repo["name"],
        "stars": repo["stargazers_count"],
        "Watchers": repo["watchers_count"]
        })

    return result





