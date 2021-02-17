import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Container, UserDiv, UserP, DivIcon } from './../styled/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

class Posts extends Component {

  render() {
    const { users, isLoading } = this.props;

    const usersData = users.map(user => <UserDiv key={user.login.uuid}>
      <UserP  >
        <Link className="link" to={`/user/${user.login.uuid}`}>{user.name.first} {user.name.last}</Link>
      </UserP>
      <DivIcon>
        <FontAwesomeIcon icon={faTrash}/>
      </DivIcon>
    </UserDiv>)
    return (
      <div className="container">
        <Container>
          {isLoading && <p>Loading...</p>}
          {usersData}
        </Container>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.users,
  isLoading: state.users.isLoading,
  isError: state.users.isError
});

export default connect(
  mapStateToProps,
 null
)(Posts);
