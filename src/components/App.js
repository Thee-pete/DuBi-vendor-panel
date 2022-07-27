//import './App.css';
import { Route, Routes } from "react-router-dom";
import NavBar from './NavBar';
import MyShops from './MyShops';
import Shop from './Shop';
import NewProduct from './NewProduct';
import NewShop from './NewShop';
import Home from './Home';

function App() {

  return (
    <div className="App">
      <NavBar/>
   
      <Routes>
   
        <Route  path="/myshops" element= { <MyShops />}></Route>
        <Route  path="/shop" element= { <Shop/>}></Route>
        <Route  path="/newproduct" element= { <NewProduct />}></Route>
        <Route  path="/newshop" element= { <NewShop />}></Route>
        <Route path="/" element={ <Home />}>
         
         </Route>
     
      </Routes>
    
    </div>
  );
}

export default App;
