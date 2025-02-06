// /app/product/[id]/DetailsPageServer.tsx

import { getProductById } from '@/app/actions/getProductById'
import DetailsPageClient from './DetailsPageClient';

export default async function DetailsPageServer({ params }: { params: { id: string } }) {
    const { id } = await params;
    const product = await getProductById(id);

    if (!product) {
        return <div>Produto não encontrado</div>;
    }

    return <DetailsPageClient product={product} />;
}
