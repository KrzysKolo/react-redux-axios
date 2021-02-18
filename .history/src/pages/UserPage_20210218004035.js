import React from 'react';
import UserProfile from './../users/containers/UserProfile';
import { Link } from 'react-router-dom';
import { Container } from './styled/styled';
const UserPage = () => {
  return (
    <Container>
      <h2>Strona użytkownika</h2>
      <UserProfile />
      <Link to="/users">Powrót</Link>
    </Container>
  )
}

export default UserPage;