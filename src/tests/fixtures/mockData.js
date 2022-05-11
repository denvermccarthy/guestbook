export const mockedEntries = [
  {
    id: 245,
    guest_id: 'c154ea2f-4681-4eba-b262-c092310c9c75',
    content: 'Testing Entry',
    created_at: '2022-05-06T22:06:20.193823+00:00',
  },
];
export const postMock = {
  id: 686,
  guest_id: 'c154ea2f-4681-4eba-b262-c092310c9c75',
  content: 'post',
  created_at: '2022-05-11T00:44:43.159208+00:00',
};

export const mockedUser = {
  access_token: 'MOCKED_ACCESS_TOKEN',
  token_type: 'bearer',
  expires_in: 3600,
  refresh_token: 'MOCKED_REFRESH_TOKEN',
  user: {
    id: '123456',
    aud: 'authenticated',
    role: 'authenticated',
    email: 'denver@denver.com',
    email_confirmed_at: '2022-05-05T21:28:30.964653Z',
    phone: '',
    confirmed_at: '2022-05-05T21:28:30.964653Z',
    last_sign_in_at: '2022-05-11T00:34:05.132973068Z',
    app_metadata: {
      provider: 'email',
      providers: ['email'],
    },
    user_metadata: {},
    identities: [
      {
        id: '123456',
        user_id: '123456',
        identity_data: {
          sub: '123456',
        },
        provider: 'email',
        last_sign_in_at: '2022-05-05T21:28:30.963061Z',
        created_at: '2022-05-05T21:28:30.963104Z',
        updated_at: '2022-05-05T21:28:30.963107Z',
      },
    ],
    created_at: '2022-05-05T21:28:30.961027Z',
    updated_at: '2022-05-11T00:34:05.13409Z',
  },
};
