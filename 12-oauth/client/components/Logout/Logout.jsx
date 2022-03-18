import React from 'react';
import { Navigate } from 'react-router-dom';

function Logout(props) {

  props.onLogout();

  return (
    <Navigate to='/login' />
  );
}

export default Logout;
