import { createClient } from "@supabase/supabase-js";
import { Database } from "../database.types";
import { Playlists } from "../types";

const SUPABASE_URL = "https://yeghwstzfzgtvdhrrxrm.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InllZ2h3c3R6ZnpndHZkaHJyeHJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxODQyMDIsImV4cCI6MTk4Mzc2MDIwMn0.gVAEDEJvNDHdsOtfywlHuNYR0hBUVH9g_B8kntls39A";
const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_KEY);

export type PlaylistInfo = {
    name: string
    id: number
}

export function playlistsServices() {
    return {
        getAllPlaylists: () => supabase.from("playlists")
            .select()
            .then((values) => values.data.reduce<Playlists>((acc, x) => {
                if (acc[x.pname] === undefined) {
                    acc[x.pname] = [];
                }
                acc[x.pname].push({
                    title: x.vtitle,
                    thumb: x.vthumb,
                    url: x.vurl
                });
                return acc;
            }, {})),
        getAllPlaylistInfo: () => supabase.from("playlist")
            .select()
            .then(values => values.data.map(({ name, id }) => {
                return { name, id } as PlaylistInfo
            }))
    }
}