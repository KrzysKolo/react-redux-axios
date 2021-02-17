import React from 'react';
import Users from './../users/containers/Users';
import { connect } from "react-redux";
import { Container, TitlePage, WrapperPage } from './styled/styled';

const Home = ({users}) => {

    return (
        <Container>
            <TitlePage>Home Page</TitlePage>
            <WrapperPage>
                <Users />
                {users.length > 0 ? <p>aaaaa</p> : null}
            </WrapperPage>

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
