import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      Header || <Link to={'/'}>Home</Link> || <Link to={'/login'}>Auth</Link>
    </div>
  );
}
