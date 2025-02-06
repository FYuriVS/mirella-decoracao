export type Product = {
    id: string;
    name: string;
    description: string;
    product_images: Image[];
};

export type Image = { image_url: string }
