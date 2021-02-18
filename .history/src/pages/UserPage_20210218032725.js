import React from 'react';
import UserProfile from './../users/containers/UserProfile';
import { Link } from 'react-router-dom';
import { Container, ButtonApp } from './styled/styled';
const UserPage = () => {
  return (
    <Container>
      <UserProfile />
      <Link to="/users" style={{textDecoration: 'none', color: 'white'}}> <ButtonApp color={'#3f51b5'}>Powrót</ButtonApp></Link>
    </Container>
  )
}

export default UserPage;