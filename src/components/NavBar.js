import React from 'react';

import {NavLink, useNavigate} from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate();
    function handleClick(){
        navigate("/");
    }
    return (
        <div className="nav-bar">
            <h1 className="comp-name" onClick={handleClick}>DuBi</h1>
            <NavLink to="/myshops">My Shops</NavLink>
     
            
        </div>
    );
}

export default NavBar;