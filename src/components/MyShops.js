import axios from 'axios';
import React, { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';
import Shop from './Shop';

//show list of shops in list
function MyShops({shops,getShops}) {

    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    function handleOnClick(){
        navigate("/newshop");
    }

        useEffect(() => {
            const fetchData = async () =>{
              setIsLoading(true);
              try {
                const response = await axios.get("https://salty-basin-17655.herokuapp.com/shops");
                console.log(response.data)
                getShops(response.data);
              } catch (error) {
                console.error(error.message);
              }
              setIsLoading(false);
            }
        
            fetchData();
          }, [getShops]);

        

   const renderShops= shops.map((shop)=> {

    return <Shop key={shop.id} shop={shop} shopId = {shop.id} />

})
   
  
    return (
        <div >
            <h1>My shops</h1>
            <erm>hint:Click on the shop to view your products</erm>
            <div className='shops-container'>
            <button className='new-shop-btn' onClick={handleOnClick}></button>
           
           <flex className='available-shops'> 
            {isLoading ? <Loading/> : renderShops }
           
           </flex>
           
           </div>
         
          

        </div>
    );
}

export default MyShops;