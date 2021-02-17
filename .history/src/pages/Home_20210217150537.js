import React from 'react';
import Users from './../users/containers/Users';
import { connect } from "react-redux";

const Home = () => {
    return (
        <div>
            <Users />
        </div>
    )
}
const mapStateToProps = state => ({
    users: state.users.users,
    isLoading: state.users.isLoading,
    isError: state.users.isError
  });

 /*  const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers())
  }); */
export default connect(
    mapStateToProps,
    null
  ) (Home);
