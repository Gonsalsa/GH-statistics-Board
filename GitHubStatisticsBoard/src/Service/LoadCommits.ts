export const getCommits = async () => {

    const baseUrl = import.meta.env.VITE_BASE_URL

    const response = await fetch(`${baseUrl}commits`)
    const commits = response.json()

    return commits
}