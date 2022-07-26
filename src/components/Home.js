import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from './NavBar';

function Home(props) {
    return (
        <div>
            <h1>Home</h1>
            <NavBar/>
            <p>Welcome to dubi</p>
            <NavLink to = "/newshop">Create new store</NavLink>
            
        </div>
    );
}

export default Home;