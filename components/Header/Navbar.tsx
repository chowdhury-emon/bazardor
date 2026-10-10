import Navlink from "@/components/Header/Navlink";
import { getCategories } from "@/lib/api"

export default async function Navbar() {
    const categories = await getCategories();
    console.log(categories)
    return (
        <div className="border">
            <nav className="container mx-auto flex my-2">
                {categories.map((category, i) => (
                    <Navlink key={i} category={category}></Navlink>
                ))}
            </nav>
        </div>
    )
}