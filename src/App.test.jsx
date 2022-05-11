import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from './App';
test('Behavioral testing for App', async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const email = await screen.findByPlaceholderText(/email address/i);
  const password = screen.getByPlaceholderText(/password/i);
  const button = screen.getByText('Sign In');
  userEvent.type(email, 'test@testing.com');
  userEvent.type(password, 'passwording');
  userEvent.click(button);

  const hometext = await screen.findByText(/home/i);

  const entry = await screen.findByText('Testing Entry');

  const textBox = screen.getByPlaceholderText('enter entry');
  const submit = screen.getByText('ADD');

  userEvent.type(textBox, 'testing');
  userEvent.click(submit);

  const post = await screen.findByText('post');
});
