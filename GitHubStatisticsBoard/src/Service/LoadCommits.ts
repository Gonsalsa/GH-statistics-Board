export const getCommits = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/commits")
    const commits = response.json()

    return commits
}