//import './App.css';
import { Route, Routes } from "react-router-dom";
import NavBar from './NavBar';
import MyShops from './MyShops';
import NewProduct from './NewProduct';
import NewShop from './NewShop';
import Home from './Home';
import Footer from "./Footer";
import ShopPage from "./ShopPage";
import { useState } from "react";

function App() {


  const [shops,setShops] =useState([]);
  const [products,setProducts] =useState([]);

  function getShops(shops){
    setShops(shops)
  }
  function onAddShop(newShop){
    setShops([...shops, newShop])

  }
  function onAddNewProduct(newProduct){
    setProducts([...products, newProduct])
  }




  return (
    <div className="App">
      <NavBar/>
   
      <Routes>
   
        <Route  path="/myshops" element= { <MyShops shops={shops} getShops={getShops}  />}></Route>
        <Route  path="/myshops/:shopId" element= { <ShopPage />}></Route>
        <Route  path="/newproduct/:shopId" element= { <NewProduct onAddNewProduct={onAddNewProduct} />}></Route>
        <Route  path="/newshop" element= { <NewShop onAddShop = {onAddShop}/>}></Route>
        <Route path="/" element={ <Home />}>
         
         </Route>
    
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
