import React, { useEffect, useState} from 'react';
import { connect } from "react-redux";
import { useParams } from 'react-router-dom';
import { NameUser, Container, UserImg } from './styled/styled';

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
    <div>
    <h2>Location:</h2>
      <h3>City: {user.location.city}</h3>
      <h3>Country: {user.location.country}</h3>
    </div>
    <div>
    <h2>Contact:</h2>
      <h3>Email: {user.email}</h3>
      <h3>Phone: {user.phone}</h3>
    </div>




    </>
  )
}
const mapStateToProps = state => ({
  users: state.users.users,
  isLoading: state.users.isLoading,
  isError: state.users.isError
});
export default connect(mapStateToProps, null) (UserProfile);
