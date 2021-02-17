import React, { Component } from "react";
import { useParams } from 'react-router-dom';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Container, UserDiv, UserP, DivIcon } from './../styled/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

class Posts extends Component {
  const { userId } = useParams();
  render() {
    const { users, isLoading } = this.props;

    const usersData = users.map(user => <UserDiv>
      <UserP key={user.login.uuid}>
        <Link className="link" to={`/${user.id}`}>{user.name.first} {user.name.last}</Link>
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
