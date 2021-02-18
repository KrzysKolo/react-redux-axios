import React, { useEffect, useState} from 'react';
import { connect } from "react-redux";
import { useParams } from 'react-router-dom';
import { NameUser, WrapperInfoSection, UserImg, WrapperInfoDiv, InfoH2, InfoH3 } from './styled/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquare, faEnvelope  } from '@fortawesome/free-solid-svg-icons';

const UserProfile = ({users}) => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  console.log(users);
  console.log(id);
  useEffect(() => {
     setUser(...users.filter((user) => user.login.uuid === id));
  }, [users, id]);
  console.log(user);
  const { large } = user.picture;
  const [ city, country ] = user.location;
  return (
    <>
    <WrapperInfoSection>
         <UserImg src={large} alt={user.name.first} />
        <NameUser>{user.name.first} {user.name.last}</NameUser>
    </WrapperInfoSection>

    <WrapperInfoDiv>

    <InfoH2>Location:</InfoH2>
      <InfoH3>City: {city}</InfoH3>
      <InfoH3>Country: {country}</InfoH3>
    </WrapperInfoDiv>
    <WrapperInfoDiv>
    <InfoH2>Contact:</InfoH2>
      <InfoH3> <FontAwesomeIcon icon={faEnvelope} style={{color: '#3f51b5', fontSize: '1.1rem'}}/> {user.email}</InfoH3>
      <InfoH3> <FontAwesomeIcon icon={faPhoneSquare} style={{color: '#3f51b5', fontSize: '1.1rem'}}/> {user.phone}</InfoH3>
    </WrapperInfoDiv>




    </>
  )
}
const mapStateToProps = state => ({
  users: state.users.users,
  isLoading: state.users.isLoading,
  isError: state.users.isError
});
export default connect(mapStateToProps, null) (UserProfile);
