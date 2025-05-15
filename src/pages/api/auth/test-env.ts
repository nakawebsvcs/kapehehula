export const prerender = false;

import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
  const supabaseKeyAvailable = !!import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

  return new Response(
    JSON.stringify({
      supabaseUrl,
      supabaseKeyAvailable,
      environment: process.env.NODE_ENV,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};