import React, { useEffect, useState} from 'react';
import { connect } from "react-redux";

import { Link, useParams } from 'react-router-dom';

const UserProfile = ({users}) => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  useEffect(() => {
     setUser(...users.filter((user) => user.login.uuid === id));

  }, [users, id]);
  console.log(user);
  return (
    <>
    <div>
        użytkownik { id }

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
