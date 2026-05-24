export const getLanguages = async () => {
     const baseUrl = import.meta.env.VITE_BASE_URL

    const response = await fetch(`${baseUrl}languages`);
    const data = await response.json()

    return data
}