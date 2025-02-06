import Image from "next/image";
import { getProducts } from "../actions/getProducts";
import ProductCard from "@/components/ProductCard";

export default async function CatalogPage() {
    const products = await getProducts();

    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow container mx-auto px-4 py-8">
                <div className="relative h-64 md:h-96 mb-12 rounded-lg overflow-hidden">
                    <Image
                        src={"https://grox9jhbcjwwn22qv.lite.vusercontent.net/placeholder.svg"}
                        alt="Banner"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-6">Produtos em Destaque!</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* <section className="mb-12 mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">Categorias</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['Electronics', 'Clothing', 'Books', 'Home & Garden'].map((category) => (
                            <Link key={category} href={`/category/${category.toLowerCase().replace(' & ', '-')}`} className="relative h-40 rounded-lg overflow-hidden group">
                                <Image src="https://grox9jhbcjwwn22qv.lite.vusercontent.net/placeholder.svg" alt={category} fill style={{ objectFit: "cover" }} />
                                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity group-hover:bg-opacity-50">
                                    <h3 className="text-white text-xl font-semibold">{category}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section> */}
            </main>
        </div>);
}
