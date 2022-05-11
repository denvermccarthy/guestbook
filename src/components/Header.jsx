import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { getUser, logOut } from '../utils/client';

export default function Header() {
  const history = useHistory();
  const {
    user: { email },
    setUser,
  } = useUser();
  const logOutHandle = async () => {
    await logOut();
    setUser({ email: null });
    history.push('/login');
  };

  return (
    <div>
      {email && (
        <>
          <p> {`Welcome, ${email}`}</p>{' '}
          <button onClick={logOutHandle}>Sign Out</button>
        </>
      )}
    </div>
  );
}
