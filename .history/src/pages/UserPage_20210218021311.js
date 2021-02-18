import React from 'react';
import UserProfile from './../users/containers/UserProfile';
import { Link } from 'react-router-dom';
import { Container, ButtonApp } from './styled/styled';
const UserPage = () => {
  return (
    <Container>
      <UserProfile />
      <ButtonApp color={'#e2e2e2'}><Link to="/users" style={{textDecoration: 'none', color: '#3f499e'}}>Powrót</Link></ButtonApp>
    </Container>
  )
}

export default UserPage;