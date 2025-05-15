import { createClient } from '@supabase/supabase-js';
export { renderers } from '../../../renderers.mjs';

const supabase = createClient(
  "https://imvrghrppjuduprdowri.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImltdnJnaHJwcGp1ZHVwcmRvd3JpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyMjAwMDgsImV4cCI6MjA2MTc5NjAwOH0.3mF9YnOMRCOh7h8_tA_FGpx4z5akOWaT3lJ4dRLLdd4"
);

const prerender = false;
const POST = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  if (!email || !password) {
    return new Response("Email and password are required", { status: 400 });
  }
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });
  if (error) {
    return new Response(error.message, { status: 500 });
  }
  const { access_token, refresh_token } = data.session;
  cookies.set("sb-access-token", access_token, {
    path: "/"
  });
  cookies.set("sb-refresh-token", refresh_token, {
    path: "/"
  });
  return redirect("/members-page");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
