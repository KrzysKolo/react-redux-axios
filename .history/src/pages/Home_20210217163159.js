import React from 'react';
import Users from './../users/containers/Users';
import { connect } from "react-redux";
import { Container, TitlePage, WrapperPage, WrapperButton, ButtonApp  } from './styled/styled';
import { fetchUsers } from './../users/redux';

const Home = () => {

    const fetchData = () => {
        console.log("klikam");
        this.props.fetchUsers();
      };

    return (
        <Container>
            <TitlePage>Home Page</TitlePage>
            <WrapperPage>
            <WrapperButton>
                <ButtonApp color={'#3f51b5'} onClick={fetchData} users={users}>Loading users</ButtonApp>
            </WrapperButton>
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

  const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers())
  });
export default connect(
    mapStateToProps,
    mapDispatchToProps
  ) (Home);
