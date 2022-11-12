import { createClient } from "@supabase/supabase-js";
import { Database } from "../database.types";

const SUPABASE_URL = "https://yeghwstzfzgtvdhrrxrm.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InllZ2h3c3R6ZnpndHZkaHJyeHJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxODQyMDIsImV4cCI6MTk4Mzc2MDIwMn0.gVAEDEJvNDHdsOtfywlHuNYR0hBUVH9g_B8kntls39A";
const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_KEY);

export function submitVideoService() {
    return {
        submitVideo: ({ title, thumb, url, playlistId }: { title: string, thumb: string, url: string, playlistId: number }) => supabase.from("video")
            .insert({
                title: title,
                thumb: thumb,
                url: url,
                playlist: playlistId
            })
            .then(
                (value) => console.log("[FULFILLED]", value),
                (reason) => console.log("[REJECTED]", reason)
            )
    }
}
