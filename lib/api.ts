import { Category } from "@/types/Category.type";
import { Product } from "@/types/Product.type";
import { promises } from "dns";

const API_URL: string = "https://openapi.programming-hero.com/api/bazardor";
// "https://api.api-store.workers.dev/api/bazardor";
// "https://api.abcz.workers.dev/api/bazardor";

export const getCategories = async (): Promise<Category[]> => {
    // https://api.api-store.workers.dev/api/bazardor/categories
    const res = await fetch(`${API_URL}/categories`);
    if (!res.ok) {
        throw new Error("Categories fetch failed!")
    } else {
        return res.json();
    }
}

export const getCategoryById = async (id: string): Promise<Category> => {
    // https://api.api-store.workers.dev/api/bazardor/categories/chal
    const res = await fetch(`${API_URL}/categories/${id}`);
    if (!res.ok) {
        throw new Error("Category fetch failed!")
    } else {
        return res.json();
    }
}

export const getProducts = async (): Promise<Product[]> => {
    // https://api.api-store.workers.dev/api/bazardor/products
    const res = await fetch(`${API_URL}/products`)
    if (!res.ok) {
        throw new Error("Product fetch failed");
    } else {
        return res.json();
    }
}

export const getProductsByCatagory = async (slug: string): Promise<Product[]> => {
    // https://api.api-store.workers.dev/api/bazardor/products?category=chal
    const res = await fetch(`${API_URL}/products?category=${slug}`);
    if (!res.ok) {
        throw new Error("Categorized product fetch failed")
    } else {
        return res.json();
    }
}