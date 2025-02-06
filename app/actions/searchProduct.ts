"use server";

import { supabase } from "../../config/supabase/supabaseClient";

export async function searchProducts(query: string) {
    const { data, error } = await supabase
        .from("products")
        .select(`
            *,
            product_images (
                image_url
            )
        `)
        .or(`name.ilike.%${query}%, description.ilike.%${query}%`);

    if (error) throw new Error(error.message);
    return data || [];
}