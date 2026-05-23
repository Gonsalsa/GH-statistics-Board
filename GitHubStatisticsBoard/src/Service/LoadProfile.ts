export const getProfile = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/GitHubInfo")
    const profile = response.json()

    return profile
}