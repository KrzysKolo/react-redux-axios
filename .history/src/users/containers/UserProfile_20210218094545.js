import React, { useEffect, useState} from 'react';
import { connect } from "react-redux";
import { useParams } from 'react-router-dom';
//import { NameUser, WrapperInfoSection, UserImg, WrapperInfoDiv, InfoH2, InfoH3 } from './styled/styled';
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
  return (
    <>
     {/*  <section>
        <img src={user.picture.large} alt={user.name.first} />
        <p>{user.name.first} {user.name.last}</p>
      </section>
      <div>
        <h2>Location:</h2>
        <h3>City: {user.location.city}</h3>
        <h3>Country: {user.location.country}</h3>
      </div> */}
      <div>
        <h2>Contact:</h2>
        <h3><FontAwesomeIcon icon={faEnvelope} style={{color: '#3f51b5', fontSize: '1.1rem'}}/> {user.email}</h3>
        <h3><FontAwesomeIcon icon={faPhoneSquare} style={{color: '#3f51b5', fontSize: '1.1rem'}}/> {user.phone}</h3>
       </div>
    </>
  )
}
const mapStateToProps = state => ({
  users: state.users.users,
  isLoading: state.users.isLoading,
  isError: state.users.isError
});
export default connect(mapStateToProps, null) (UserProfile);
