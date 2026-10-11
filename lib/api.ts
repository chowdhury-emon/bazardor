import { Category } from "@/types/Category.type";
import { Product } from "@/types/Product.type";

const API_URL: string = "https://openapi.programming-hero.com/api/bazardor";
// "https://api.api-store.workers.dev/api/bazardor";
// "https://api.abcz.workers.dev/api/bazardor";

export const getCategories = async (): Promise<Category[]> => {
    const res = await fetch(`${API_URL}/categories`);
    if (!res.ok) {
        throw new Error("Categories fetch failed!")
    } else {
        return res.json();
    }
}

export const getProducts = async (): Promise<Product[]> => {
    const res = await fetch(`${API_URL}/products`)
    if(!res.ok){
        throw new Error("Product fetch failed");
    } else {
        return res.json();
    }
}