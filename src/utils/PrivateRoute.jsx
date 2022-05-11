import React from 'react';
import { useLocation } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { useUser } from '../context/UserContext';

export default function PrivateRoute({ children, ...rest }) {
  const {
    user: { email },
  } = useUser();
  const location = useLocation();

  return (
    <Route {...rest}>{email ? children : <Redirect to={'/login'} />}</Route>
  );
}
