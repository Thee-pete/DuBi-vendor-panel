import React from 'react';
import { useNavigate } from 'react-router-dom';



function NewProduct() {

    const navigate = useNavigate();
    function handleClick(){
        //need to get the specific shop so use id to identify
        navigate("/shop");
    }




    return (
        <div>
            <h1>New Product</h1>
           <button onClick={handleClick}></button>
        </div>
    );
}

export default NewProduct;