import React from 'react';

import {NavLink, useNavigate} from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate();
    function handleClick(){
        navigate("/");
    }
    return (
        <div className="nav-bar">
            <h1 onClick={handleClick}>DuBi</h1>
            <NavLink style ={{ marginRight: "10px" }} to="/myshops">My Shops</NavLink>
     
            
        </div>
    );
}

export default NavBar;