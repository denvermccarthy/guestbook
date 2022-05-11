import { client, getUser } from './client';

export const fetchEntries = async () => {
  const { data } = await client.from('entries').select();
  return data;
};

export const createEntry = async (content) => {
  const resp = await client
    .from('entries')
    .insert({ guest_id: getUser().id, content })
    .single();
  return resp;
};
