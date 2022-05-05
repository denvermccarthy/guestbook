import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import bookIMG from '../assets/a66849ac2514905d94da.png';
import { useUser } from '../context/UserContext';

export default function Auth() {
  const [signingIn, setSigningIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();
  const { setUser, user, handleAuth } = useUser();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const resp = await handleAuth(email, password, signingIn);
      setUser(resp);
      history.push('/');
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div>
      <img src={bookIMG} alt="Book" />
      <h1>{signingIn ? 'Sign in to your account' : 'Create an account'}</h1>
      <p>
        Or{' '}
        <span onClick={() => setSigningIn(!signingIn)}>
          {signingIn ? 'create an account' : 'sign in to your account'}
        </span>
      </p>
      <form onSubmit={(e) => submitHandler(e)}>
        <label htmlFor="email">
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            placeholder="Email address"
          />
        </label>
        <label htmlFor="password">
          <input
            type="text"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            placeholder="Password"
          />
        </label>
        <button>{signingIn ? 'Sign In' : 'Create Account'}</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}
