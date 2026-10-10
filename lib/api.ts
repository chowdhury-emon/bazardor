const API_URL: string = "https://openapi.programming-hero.com/api/bazardor";
// "https://api.api-store.workers.dev/api/bazardor";
// "https://api.abcz.workers.dev/api/bazardor";

export const getCategories = async () => {
    try {
        const res = await fetch(`${API_URL}/categories`);
        if (!res.ok) {
            throw new Error("Categories fetch failed!")
        } else{
            return res.json();
        }
    } catch (error) {
        console.log(error)
    }
}