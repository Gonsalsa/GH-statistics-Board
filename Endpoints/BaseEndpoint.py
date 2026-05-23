import httpx
import os
from dotenv import load_dotenv

load_dotenv()

GITHUB_PAT = os.getenv("PAT")

def get_baseinfo():
    headers = {"Authorization": f"Bearer {GITHUB_PAT}"}
    response = httpx.get("https://api.github.com/users/Gonsalsa", headers=headers)

    data = response.json()

    return data