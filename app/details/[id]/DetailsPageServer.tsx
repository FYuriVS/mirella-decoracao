// /app/product/[id]/DetailsPageServer.tsx
import { getProductById } from '@/app/actions/getProductById'
import DetailsPageClient from './DetailsPageClient';

export default async function DetailsPageServer({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    try {
        const product = await getProductById(id);

        if (!product) {
            return <div>Produto não encontrado</div>;
        }

        return <DetailsPageClient product={product} />;
    } catch (error) {
        return <div>Ocorreu um erro ao buscar o produto</div>;
    }
}