import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemsList from "./components/ItemsList";
import Basket from "./components/Basket";
import NavBar from "./components/NavBar";

function App() {

  const dummyData = [
    {name: "The Digger", price: 2000, model: "tk5.75"},
   {name: "Hunter Gatherer", price: 200, model: "jhg45.45"}, 
   {name: "JCB", price: 10000, model: "tk56.567"}];

  const [allProducts, setAllProducts] = useState(dummyData);
  const [basket, setBasket] = useState([]);

  const addToBasket = (product) => {
    const copyOfBasket = [...basket]
    copyOfBasket.push(product)
    setBasket(copyOfBasket)
  }



  return (
    <div>
    <Router>
    <NavBar/>
      <Routes>
      <Route path="/home" exact element={ <ItemsList allProducts={allProducts} addToBasket={addToBasket}/>}/>
      <Route path="/basket" exact element={ <Basket basket={basket}/>}/>
      </Routes>
    </Router>
    </div>
    
  );
}

export default App;
