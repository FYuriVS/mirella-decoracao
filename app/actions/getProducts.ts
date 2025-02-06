"use server";

import { supabase } from "../../config/supabase/supabaseClient";

export async function getProducts() {
    const { data, error } = await supabase
        .from("products")
        .select(`
            *,
            product_images (
                image_url
            )
        `);  // Usamos a relação direta entre as tabelas com a notação de junção

    if (error) throw new Error(error.message);
    else {
        return data || [];
    }
}
