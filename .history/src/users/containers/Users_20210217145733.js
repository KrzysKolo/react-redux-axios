import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchUsers } from './../redux';

class Posts extends Component {
  fetchData = () => {
    console.log("klikam");
    this.props.fetchUsers();
  };
  render() {
    const { users, isLoading } = this.props;
    return (
      <div className="container">
        <h2>Users</h2>
        {isLoading && <p>Loading...</p>}
        <button onClick={this.fetchData}>Fetch Users</button>
        <p users={users} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.users,
  isLoading: state.users.isLoading,
  isError: state.users.isError
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
