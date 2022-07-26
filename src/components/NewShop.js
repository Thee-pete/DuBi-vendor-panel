import React from 'react';
import { NavLink ,useHistory } from 'react-router-dom';

function NewShop(props) {

    const history = useHistory;
    function handleClick(){
        history.push("/myshops")
    }

    return (
        <div>
            <h1>New Shop</h1>
            
            <NavLink>Programmatic navigation to my shops</NavLink>
            <button onClick={handleClick}>SAVE</button>
        </div>
    );
}

export default NewShop;