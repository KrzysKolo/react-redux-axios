import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from './../styled/styled';


class Posts extends Component {



  render() {
    const { users, isLoading } = this.props;

    const usersData = users.map(user => <p key={user.login.uuid}>{user.name.first} {user.name.last}</p>)
    return (
      <div className="container">
        <h2>Users</h2>
        {isLoading && <p>Loading...</p>}
        {usersData}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.users,
  isLoading: state.users.isLoading,
  isError: state.users.isError
});

/* const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
}); */

export default connect(
  mapStateToProps,
 null
)(Posts);
