import React from 'react';
import { useNavigate } from 'react-router-dom';

function NewShop(props) {

    const navigate = useNavigate();
    function handleClick(){
        navigate("/myshops")
    }

    return (
        <div>
            <h1>New Shop</h1>
            
           
            <button onClick={handleClick}>SAVE</button>
        </div>
    );
}

export default NewShop;