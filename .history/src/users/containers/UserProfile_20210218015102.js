import React, { useEffect, useState} from 'react';
import { connect } from "react-redux";
import { useParams } from 'react-router-dom';
import { NameUser, Container, UserImg, WrapperInfoDiv, InfoH2, InfoH3 } from './styled/styled';

const UserProfile = ({users}) => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  console.log(users);
  console.log(id);
  useEffect(() => {
     setUser(...users.filter((user) => user.login.uuid === id));
  }, [users, id]);
  console.log(user);
  return (
    <>
    <Container>
         <UserImg src={user.picture.large} alt={user.name.first} />
        <NameUser>{user.name.first} {user.name.last}</NameUser>
    </Container>
    <WrapperInfoDiv>
    <InfoH2>Location:</InfoH2>
      <InfoH3>City: {user.location.city}</InfoH3>
      <InfoH3>Country: {user.location.country}</InfoH3>
    </WrapperInfoDiv>
    <WrapperInfoDiv>
    <InfoH2>Contact:</InfoH2>
      <InfoH3>Email: {user.email}</InfoH3>
      <InfoH3>Phone: {user.phone}</InfoH3>
    </WrapperInfoDiv>




    </>
  )
}
const mapStateToProps = state => ({
  users: state.users.users,
  isLoading: state.users.isLoading,
  isError: state.users.isError
});
export default connect(mapStateToProps, null) (UserProfile);
