export const getProfile = async () => {

    const baseUrl = import.meta.env.VITE_BASE_URL

    const response = await fetch(`${baseUrl}GitHubInfo`);
    const profile = response.json()

    return profile
}