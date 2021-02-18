import React, { useEffect, useState} from 'react';
import { connect } from "react-redux";
import { useParams } from 'react-router-dom';
import { NameUser } from './styled/styled';

const UserProfile = ({users}) => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  useEffect(() => {
     setUser(...users.filter((user) => user.login.uuid === id));
  }, [users, id]);
  console.log(user);
  return (
    <>
    <div>
        <NameUser>{user.name.first} {user.name.last}</NameUser>
        <h3>{user.email}</h3>
        <p>{user.phone}</p>


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
