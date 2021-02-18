import React from 'react';
import UserProfile from './../users/containers/UserProfile';
import { Link } from 'react-router-dom';
import { Container, ButtonApp } from './styled/styled';
const UserPage = () => {
  return (
    <Container>
      <UserProfile />
      <ButtonApp color={'#3f51b5'}><Link to="/users" style={{textDecoration: 'none', color: 'white'}}>Powrót</Link></ButtonApp>
    </Container>
  )
}

export default UserPage;