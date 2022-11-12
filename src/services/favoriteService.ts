import { createClient } from "@supabase/supabase-js";
import { Database } from "../database.types";
import { Playlists } from "../types";

const SUPABASE_URL = "https://yeghwstzfzgtvdhrrxrm.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InllZ2h3c3R6ZnpndHZkaHJyeHJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxODQyMDIsImV4cCI6MTk4Mzc2MDIwMn0.gVAEDEJvNDHdsOtfywlHuNYR0hBUVH9g_B8kntls39A";
const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_KEY);

export function favoritesServices() {
    return {
        getAllFavorites: () => supabase.from("favorite")
            .select()
            .then((values) => values.data)
    }
}