import React from 'react';
import { useNavigate } from 'react-router-dom';


function Home(props) {
    const navigate = useNavigate();
    function handleClick(){
        navigate("/newshop");
    }
    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to dubi</p>
            <button onClick={handleClick}>Create new store</button>
            
        </div>
    );
}

export default Home;