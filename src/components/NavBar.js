import React from 'react';
import {NavLink} from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <h1>DuBi</h1>
            <NavLink style ={{ marginRight: "10px" }} to="/myshops">My Shops</NavLink>
     
            
        </div>
    );
}

export default NavBar;