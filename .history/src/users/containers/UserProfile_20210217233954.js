import React from 'react';
simport { connect } from "react-redux";

import { Link, useParams } from 'react-router-dom';
const UserProfile = ({user}) => {
  const { id } = useParams();

  return (
    <div>
       hahaha {id}

    </div>
  )
}

export default UserProfile
