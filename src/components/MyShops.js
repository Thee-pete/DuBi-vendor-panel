import React from 'react';
import { NavLink } from 'react-router-dom';
import AllShops from './AllShops';
import Shop from './ShopPage';

//show list of shops in div/gridview
function MyShops(props) {
  
    return (
        <div>
            <h1>My shops</h1>
            <NavLink to="/newshop">New shop</NavLink>
           
           <ul>
            <li>shop</li>
            <li>shop</li>
            <li>shop</li>
           </ul>
           
           
         
          

        </div>
    );
}

export default MyShops;