import React from 'react';
import Users from './../users/containers/Users';
import { connect } from "react-redux";
import { Container, TitlePage, WrapperPage, WrapperButton, ButtonApp, Buttons, WrapperUsers  } from './styled/styled';
import { fetchUsers, resetUsers } from './../users/redux';

const Home = ({users, fetchUsers }) => {

  const fetchData = () => {
    console.log("klikam");
    fetchUsers();
    };

  const resetUsers = () => removeUsers();

  return (
    <Container>
      <TitlePage>users Page</TitlePage>
        <WrapperPage>
         <WrapperButton>
           <ButtonApp color={'#3f51b5'} onClick={fetchData} users={users}>Loading users</ButtonApp>
            {users.length > 0 ? (
              <Buttons>
                <ButtonApp color={'rgb(195, 1, 4)'} onClick={resteUser}>Reset Users</ButtonApp>
                <ButtonApp color={'rgb(76, 175, 80)'}>Add User</ButtonApp>
              </Buttons>) : null}
        </WrapperButton>
        <WrapperUsers>
          <Users />
        </WrapperUsers>
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
    fetchUsers: () => dispatch(fetchUsers()),
    resetUsers: () => dispatch(resetUsers())
  });
export default connect(
    mapStateToProps,
    mapDispatchToProps
  ) (Home);
