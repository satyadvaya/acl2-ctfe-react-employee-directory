import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export default function PrivateRoute({ children, ...routeProps }) {
  const isLoggedIn = false;
  const user = isLoggedIn ? { id: 1, email: 'alan@email.com' } : null;

  return (
    <Route {...routeProps}>{user ? children : <Redirect to="/login" />}</Route>
  );
}
