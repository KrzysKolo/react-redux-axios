import React from 'react';
import Users from './../users/containers/Users';
import { connect } from "react-redux";
import { Container, TitlePage, WrapperPage, WrapperButton, ButtonApp, Buttons  } from './styled/styled';
import { fetchUsers } from './../users/redux';

const Home = ({users, fetchUsers }) => {

    const fetchData = () => {
        console.log("klikam");
        fetchUsers();
      };

    return (
        <Container>
            <TitlePage>Home Page</TitlePage>
            <WrapperPage>
            <WrapperButton>
                <ButtonApp color={'#3f51b5'} onClick={fetchData} users={users}>Loading users</ButtonApp>
                {users.length > 0 ? (
                    <Buttons>
                        <ButtonApp color={'rgb(195, 1, 4)'}>Reset Users</ButtonApp>
                        <ButtonApp color={'rgb(76, 175, 80)'}>Add User</ButtonApp>
                    </Buttons>) : null}
            </WrapperButton>
                <Users />

            </WrapperPage>

        </Container>
    )
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
  ) (Home);
