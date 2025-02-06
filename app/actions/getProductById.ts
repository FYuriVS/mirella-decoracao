"use server";

import { supabase } from "../../config/supabase/supabaseClient";

export async function getProductById(productId: string) {
    const { data, error } = await supabase
        .from("products")
        .select(`
            *,
            product_images (
                image_url
            )
        `)
        .eq("id", productId)

    if (error) throw new Error(error.message);
    else {
        return data?.[0] || null;
    }
}
