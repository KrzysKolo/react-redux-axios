import React from 'react'
import { Link, useParams } from 'react-router-dom';
const UserProfile = ({user}) => {
  const { id } = useParams();
  console.log(user)
  return (
    <div>
       hahaha {id}

    </div>
  )
}

export default UserProfile
