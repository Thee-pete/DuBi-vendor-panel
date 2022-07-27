import React from 'react';
import { NavLink } from 'react-router-dom';
import Shop from './Shop';

//show list of shops in div/gridview
function MyShops(props) {
  
    return (
        <div>
            <h1>My shops</h1>
            <NavLink to="/newshop">New shop</NavLink>
           
           <ul>
            <li><Shop/></li>
            <li><Shop/></li>
            <li><Shop/></li>
           </ul>
           
           
         
          

        </div>
    );
}

export default MyShops;