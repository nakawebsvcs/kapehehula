import { createClient } from "@supabase/supabase-js";

// Check if environment variables are available
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Missing Supabase environment variables");
  console.error("PUBLIC_SUPABASE_URL:", supabaseUrl);
  console.error("PUBLIC_SUPABASE_ANON_KEY available:", !!supabaseAnonKey);
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);