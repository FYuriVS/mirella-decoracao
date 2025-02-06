import DetailsPageServer from './DetailsPageServer';

interface ProductPageProps {
    params: { id: string };
}

export default function ProductPage({ params }: ProductPageProps) {
    return <DetailsPageServer params={params} />;
}