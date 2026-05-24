
import httpx
import os
from dotenv import load_dotenv

load_dotenv()

GITHUB_PAT = os.getenv("PAT")

def get_profile():
    headers = {"Authorization": f"Bearer {GITHUB_PAT}"}
    response = httpx.get("https://api.github.com/users/Gonsalsa", headers=headers)

    data = response.json()

    return {
        "name": data["name"],
        "Username": data["login"],
        "Email": data["email"],
        "repoCount": data["public_repos"],
        "profileURL": data["html_url"],
        "avatarURL": data["avatar_url"]
    }
