import httpx
import os
from dotenv import load_dotenv
from collections import Counter

load_dotenv()

GITHUB_PAT = os.getenv("PAT")

def GetLanguage():
    headers = {"Authorization": f"Bearer {GITHUB_PAT}"}
    response = httpx.get("https://api.github.com/users/Gonsalsa/repos?per_page=100&sort=pushed", headers=headers)

    repos = response.json()
    language_counter = Counter()

    for repo in repos:
        if repo["language"]:
            language_counter[repo["language"]] += 1

    result = []
    for lang,  counter in language_counter.most_common():
        result.append({
            "language": lang, "count": counter
        })

    return result
