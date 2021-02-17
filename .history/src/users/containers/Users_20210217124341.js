import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from './redux';
const Users = () => {
  fetchData = () => {
    this.props.fetchUsers();
  }
  const { users, isLoading }= this.props
  return (
    <div>
      Users
      {isLoading && <p>Loading...</p>}
      <button onClick={this.fetchData}>Loading users</button>
      <p>{users}</p>
    </div>
  )
}
function mapStateToProps(state) {
  return {
    users: state.users.users,
    isLoading: state.users.isLoading,
    isError: state.users.isError
  }
};
function mapDispatchToProps(dispatch){
  return {
    fatchUsers: () => dispatch(fetchUsers())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);
