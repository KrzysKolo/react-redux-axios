import React from 'react'
import { Link, useParams } from 'react-router-dom';
const UserProfile = () => {
  const { id } = useParams();
  return (
    <div>
       hahaha {id}
    </div>
  )
}

export default UserProfile
