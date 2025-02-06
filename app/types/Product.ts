export type ProductType = {
    id: string;
    name: string;
    description: string;
    product_images: ImageType[];
};

export type ImageType = { image_url: string }
