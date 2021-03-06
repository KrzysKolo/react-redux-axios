import React, { Component } from "react";
import { connect } from "react-redux";


import { fetchPosts } from "../redux";

class Posts extends Component {
  fetchData = () => {
    this.props.fetchUsers();
  };
  render() {
    const { posts, isLoading } = this.props;
    return (
      <div className="container">
        <h2>Posts</h2>
        {isLoading && <p>Loading...</p>}
        <button onClick={this.fetchData}>Fetch Users</button>
        <p posts={users} />
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
// const mapDispatchToProps = {
//   fetchPosts
// };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
