"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { searchProducts } from "../app/actions/searchProduct"; // Importe a função de busca
import { ProductType } from "@/app/types/Product";

export function Header() {
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([] as ProductType[]);

    useEffect(() => {
        if (searchTerm.length > 2) {  // Só busca se houver pelo menos 3 caracteres
            const fetchResults = async () => {
                const products = await searchProducts(searchTerm);

                setResults(products);
            };
            fetchResults();
        } else {
            setResults([]);
        }
    }, [searchTerm]);

    return (
        <header className="sticky top-0 z-50 shadow-md bg-white">
            <div className="container mx-auto px-1 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold p-1">
                    <Image className="rounded-xl" src={"/logo.jpeg"} alt="logo" width={90} height={80} />
                </Link>
                <div className=" hidden lg:flex items-center space-x-4">
                    <form className="relative hidden md:flex items-center">
                        {/* Barra de busca */}
                        <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2">
                            <Search className="w-5 h-5 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Buscar produtos..."
                                className="bg-transparent outline-none ml-2 text-gray-800 placeholder-gray-500 w-64"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        {/* Dropdown de Resultados */}
                        {results.length > 0 && (
                            <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-md mt-2 max-h-60 overflow-y-auto">
                                {results.map((product: ProductType) => (
                                    <Link
                                        key={product.id}
                                        href={`/details/${product.id}`}
                                        className="block px-4 py-2 hover:bg-gray-100"
                                        onClick={() => {
                                            setSearchTerm("")
                                        }}
                                    >
                                        {product.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </header>
    );
}
