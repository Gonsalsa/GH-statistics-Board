export const getRepos = async () => {

    const baseUrl = import.meta.env.VITE_BASE_URL

    const response = await fetch(`${baseUrl}repos`)
    const repos = await response.json()

    return repos
}