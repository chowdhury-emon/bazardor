import Navlink from "@/components/Header/Navbar/Navlink";
import { getCategories } from "@/lib/api"

export default async function Navbar() {
   const categories = await getCategories();
   console.log(categories);
    return (
        <div className="border-b border-t border-border">
            <nav className="container mx-auto flex p-2 flex-nowrap overflow-x-auto">
                {categories.map((category, i) => (
                    <Navlink key={i} category={category}></Navlink>
                ))}
            </nav>
        </div>
    )
}