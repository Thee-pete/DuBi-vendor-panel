//import './App.css';
import { Route, Routes } from "react-router-dom";
import NavBar from './NavBar';
import MyShops from './MyShops';
import NewProduct from './NewProduct';
import NewShop from './NewShop';
import Home from './Home';
import Footer from "./Footer";
import ShopPage from "./ShopPage";

function App() {



  return (
    <div className="App">
      <NavBar/>
   
      <Routes>
   
        <Route  path="/myshops" element= { <MyShops />}></Route>
        <Route  path="/shoppage" element= { <ShopPage/>}></Route>
        <Route  path="/newproduct" element= { <NewProduct />}></Route>
        <Route  path="/newshop" element= { <NewShop />}></Route>
        <Route path="/" element={ <Home />}>
         
         </Route>
    
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
