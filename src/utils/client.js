import { createClient } from '@supabase/supabase-js';

export const client = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

export const signUpUser = async (email, password) => {
  const resp = await client.auth.signUp({ email, password });
  return resp.user;
};

export const signInUser = async (email, password) => {
  const resp = await client.auth.signIn({ email, password });
  return resp.user;
};

export const logOut = async () => {
  await client.auth.signOut();
};

export const getUser = () => {
  return client.auth.user();
};
