import React from 'react';
import UserProfile from './../users/containers/UserProfile';
import { Link } from 'react-router-dom';
import { Container, TitlePage } from './styled/styled';
const UserPage = () => {
  return (
    <Container>
      <TitlePage>Strona użytkownika</TitlePage>
      <UserProfile />
      <Link to="/users">Powrót</Link>
    </Container>
  )
}

export default UserPage;