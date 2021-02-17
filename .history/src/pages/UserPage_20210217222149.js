import React from 'react';
import UserDetails from './../components/users/UserDetails';
import { Link } from 'react-router-dom';
const UserPage = () => {
  return (
    <div>
      <h2>Strona użytkownika</h2>
      <UserDetails />
      <Link to="/">Powrót</Link>
    </div>
  )
}

export default UserPage;