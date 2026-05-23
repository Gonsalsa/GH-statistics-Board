export const getRepos = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/repos")
    const repos = await response.json()

    return repos
}