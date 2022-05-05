import { createClient } from '@supabase/supabase-js';

const client = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

export async function signUpUser(email, password) {
  const resp = await client.auth.signUp({ email, password });
  return resp.user;
}

export async function signInUser(email, password) {
  const resp = await client.auth.signIn({ email, password });
  return resp.user;
}

export async function logOut() {
  await client.auth.signOut();
}
