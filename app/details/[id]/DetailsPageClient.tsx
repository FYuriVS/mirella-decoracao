'use client';

import { useState } from 'react';
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ImageType, ProductType, } from '@/app/types/Product';
import Link from 'next/link';

export default function DetailsPageClient({ product }: { product: ProductType }) {
    const hasImages = product.product_images && product.product_images.length > 0;
    const firstImage = hasImages ? product.product_images[0].image_url : "https://grox9jhbcjwwn22qv.lite.vusercontent.net/placeholder.svg";

    const [mainImage, setMainImage] = useState(firstImage);

    const handleImageClick = (imageUrl: string) => {
        setMainImage(imageUrl);
    };

    return (
        <div className="flex flex-col md:flex-row gap-8 justify-around">
            <div className="md:w-1/3">
                <div className="relative w-full pt-[100%] mb-4">
                    <Image
                        src={mainImage}
                        alt={product.name}
                        fill
                        style={{ objectFit: "cover", borderRadius: "0.5rem" }}
                    />
                </div>
                <div className="flex justify-center gap-2">
                    {hasImages ? (
                        product.product_images.map((image: ImageType, index: number) => (
                            <button
                                key={index}
                                className={`w-16 h-16 relative ${mainImage === image.image_url ? 'border-2 border-blue-500' : ''}`}
                                onClick={() => handleImageClick(image.image_url)}
                            >
                                <Image
                                    src={image.image_url}
                                    alt={`${product.name} - imagem ${index + 1}`}
                                    fill
                                    style={{ objectFit: "cover", borderRadius: "0.5rem" }}
                                />
                            </button>
                        ))
                    ) : (
                        <div className="w-16 h-16 bg-gray-200 flex items-center justify-center">Sem Imagem</div>
                    )}
                </div>
            </div>
            <div className="md:w-1/2 flex flex-col justify-between">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold mb-4">{product.name}</h1>
                    <p className="mb-4">{product.description}</p>
                </div>
                <Button className="w-full sm:w-auto background-btn-theme"><Link href={`https://wa.me/+5585987026545/?text=Gostaria%20de%20saber%20mais%20informações%20sobre%20o%20produto%20${product.name}`}>
                    Entrar em contato
                </Link></Button>
            </div>
        </div>
    )
}
