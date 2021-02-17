import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from './../redux';
class Users extends Component {
  fetchData = () => {
    this.props.fetchUsers();
  }
  render () {
  const { users, isLoading } = this.props
  return (
    <div>
      Users
      {isLoading && <p>Loading...</p>}
      <button onClick={this.fetchData}>Loading users</button>
      <p>{users}</p>
    </div>
  )
}
};
function mapStateToProps(state) {
  return {
    users: state.users.users,
    isLoading: state.users.isLoading,
    isError: state.users.isError
  }
};
function mapDispatchToProps(dispatch){
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);
