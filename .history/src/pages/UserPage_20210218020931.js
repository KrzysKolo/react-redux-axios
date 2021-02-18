import React from 'react';
import UserProfile from './../users/containers/UserProfile';
import { Link } from 'react-router-dom';
import { Container, ButtonApp } from './styled/styled';
const UserPage = () => {
  return (
    <Container>
      <UserProfile />
      <ButtonApp color={'#b30070'}><Link to="/users" style={{textDecoration: none,}}>Powrót</Link></ButtonApp>
    </Container>
  )
}

export default UserPage;