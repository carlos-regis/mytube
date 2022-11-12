import config from "../../config.json";
import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(config.supabase.url, config.supabase.api_key);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                .select("*")
        }
    }
}
