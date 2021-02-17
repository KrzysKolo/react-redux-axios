import React, { useEffect, useState} from 'react';
import { connect } from "react-redux";

import { Link, useParams } from 'react-router-dom';
const UserProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  return (
    <div>
       hahaha {id}

    </div>
  )
}
const mapStateToProps = state => ({
  users: state.users.users,
  isLoading: state.users.isLoading,
  isError: state.users.isError
});
export default connect(mapStateToProps, null) (UserProfile);
