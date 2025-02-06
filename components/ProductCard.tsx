import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/ui/button"; // Caso você tenha um componente de botão reutilizável
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "../components/ui/card"; // Ajuste se necessário

interface Product {
    id: number;
    name: string;
    product_images: { image_url: string }[];
}

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <Card className="flex flex-col justify-between">
            <CardHeader className="p-0">
                <div className="relative pt-[100%]">
                    <Image
                        src={product.product_images[0].image_url || "/placeholder.jpg"}
                        alt={product.name}
                        fill
                        style={{ objectFit: "cover", borderTopLeftRadius: ".4rem", borderTopRightRadius: ".4rem" }}
                    />
                </div>
            </CardHeader>
            <CardContent className="p-4">
                <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
            </CardContent>
            <CardFooter className="p-4 pt-0">
                <Link href={`/details/${product.id}`} className="w-full">
                    <Button className="w-full background-btn-theme">Ver Detalhes</Button>
                </Link>
            </CardFooter>
        </Card>
    );
};

export default ProductCard;
