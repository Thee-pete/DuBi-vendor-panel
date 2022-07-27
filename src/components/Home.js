import React from 'react';
import { useNavigate } from 'react-router-dom';


function Home(props) {
    const navigate = useNavigate();
    function handleClick(){
        navigate("/newshop");
    }
 

    return (
        <div>
            
            <p className='dubi-info'>Welcome vendor, 
                DuBi is a platform where you can create your own online store 
                and use the platform to reach a wider online market. 
                We will handle the packaging and distribution of your products.</p>
            <button className='create-store-btn' onClick={handleClick}>Create new store</button>
            
        </div>
    );
}

export default Home;