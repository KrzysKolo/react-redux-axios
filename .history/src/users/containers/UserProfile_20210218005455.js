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
        użytkownik { id }
        <NameUser>{user.name.first} </NameUser>

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
