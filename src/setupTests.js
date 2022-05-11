import fetch from 'cross-fetch';
global.fetch = fetch;
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { mockedEntries, mockedUser, postMock } from './tests/fixtures/mockData';

const server = setupServer(
  rest.get(
    'https://ezwbsacoojmonmiqffad.supabase.co/rest/v1/entries',
    (req, res, ctx) => {
      return res(ctx.json(mockedEntries));
    }
  ),
  rest.post(
    'https://ezwbsacoojmonmiqffad.supabase.co/auth/v1/token',
    (req, res, ctx) => {
      return res(ctx.json(mockedUser));
    }
  ),
  rest.post(
    'https://ezwbsacoojmonmiqffad.supabase.co/rest/v1/entries',
    (req, res, ctx) => {
      return res(ctx.json(postMock));
    }
  )
);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
