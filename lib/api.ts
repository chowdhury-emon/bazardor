import { Category } from "@/types/Category.type";
import { Product } from "@/types/Product.type";

const API_URL: string = "https://openapi.programming-hero.com/api/bazardor";
// "https://api.api-store.workers.dev/api/bazardor";
// "https://api.abcz.workers.dev/api/bazardor";

export const getCategories = async (): Promise<Category[] | null> => {
    // https://api.api-store.workers.dev/api/bazardor/categories
    const res = await fetch(`${API_URL}/categories`);
    if (res.status == 404) return null;
    if (!res.ok) {
        throw new Error("Categories fetch failed!")
    } else {
        return res.json();
    }
}

export const getCategoryById = async (id: string): Promise<Category | null> => {
    // https://api.api-store.workers.dev/api/bazardor/categories/chal
    const res = await fetch(`${API_URL}/categories/${id}`);
    if (res.status == 404) return null;
    if (!res.ok) {
        throw new Error("Category fetch failed!")
    } else {
        return res.json();
    }
}

export const getProducts = async (): Promise<Product[]> => {
    // https://api.api-store.workers.dev/api/bazardor/products
    const res = await fetch(`${API_URL}/products`);
    if (!res.ok) {
        throw new Error("Products fetch failed");
    } else {
        return res.json();
    }
}

export const getProductsByCatagory = async (slug: string): Promise<Product[]> => {
    // https://api.api-store.workers.dev/api/bazardor/products?category=chal
    const res = await fetch(`${API_URL}/products?category=${slug}`);
    if (!res.ok) {
        throw new Error("Categorized products fetch failed")
    } else {
        return res.json();
    }
}

export const getProductById = async (id: string): Promise<Product | null> => {
    // https://api.api-store.workers.dev/api/bazardor/products/1
    const res = await fetch(`${API_URL}/products/${id}`);
    if (res.status == 404) return null;
    if (!res.ok) {
        throw new Error("Product fetch failed")
    } else {
        return res.json();
    }
}