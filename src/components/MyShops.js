import React from 'react';
import { NavLink } from 'react-router-dom';
import AllShops from './AllShops';

//show list of shops in div/gridview
function MyShops(props) {
  
    return (
        <div>
            <h1>My shops</h1>
            <NavLink to="/newshop">New shop</NavLink>
            <AllShops/>
          

        </div>
    );
}

export default MyShops;