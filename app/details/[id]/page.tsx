import DetailsPageServer from './DetailsPageServer';

interface ProductPageProps {
    params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { id } = await params;
    return <DetailsPageServer params={params} />;
}
