import React from 'react';
import { useNavigate } from 'react-router-dom';
import Shop from './Shop';

//show list of shops in div/gridview
function MyShops(props) {
    const navigate = useNavigate();
    function handleOnClick(){
        navigate("/newshop");
    }
  
    return (
        <div >
            <h1>My shops</h1>
            <div className='shops-container'>
            <button className='new-shop-btn' onClick={handleOnClick}>New shop</button>
           
           <ul className='available-shops'>
            <li><Shop/></li>
            <li><Shop/></li>
            <li><Shop/></li>
           </ul>
           
           </div>
         
          

        </div>
    );
}

export default MyShops;