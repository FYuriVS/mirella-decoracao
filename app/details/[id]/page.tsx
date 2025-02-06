import DetailsPageServer from './DetailsPageServer';

export default async function ProductPage({ params }: { params: { id: string } }) {
    return <DetailsPageServer params={params} />;
}
