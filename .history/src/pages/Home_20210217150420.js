import React from 'react';
import Users from './../users/containers/Users';
import { connect } from "react-redux";

const Home = () => {
    return (
        <div>
            <Users />
        </div>
    )
}

export default Home;
