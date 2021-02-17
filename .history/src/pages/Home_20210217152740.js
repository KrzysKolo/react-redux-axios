import React from 'react';
import Users from './../users/containers/Users';
import { connect } from "react-redux";
import { Container, TitlePage, WrapperPage } from './styled/styled';

const Home = ({users}) => {

    return (
        <Container>
        <TitlePage>Home Page</TitlePage>
            <Users />
            {users.length > 0 ? <p>aaaaa</p> : null}
        </Container>
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
