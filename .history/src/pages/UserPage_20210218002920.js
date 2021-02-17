import React from 'react';
import UserProfile from './../users/containers/UserProfile';
import { Link } from 'react-router-dom';
const UserPage = () => {
  return (
    <div>
      <h2>Strona użytkownika</h2>
      <UserProfile />
      <Link to="/users">Powrót</Link>
    </div>
  )
}

export default UserPage;