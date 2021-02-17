import React from 'react'
import { Link, useParams } from 'react-router-dom';
const UserProfile = ({user}) => {
  const { id } = useParams();
  return (
    <div>
       hahaha {id}
       {user.name.first}
    </div>
  )
}

export default UserProfile
