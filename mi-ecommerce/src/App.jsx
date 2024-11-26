import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Category from "./components/Category";
import ItemDetail from "./components/ItemDetail";
import { useState } from 'react'
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button/Button'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { getProducts, getProductsById } from "../mock/mockData";


function App() {
  
  console.log("se renderiza el app")
  
  let valor= 18
  return (
    <>
    <NavBar valor={valor}/>
    {/* <div>
      <h1>Hola</h1>
      <Button text="mi primer botón" color="red"/>
    </div> */}
    <ItemListContainer mensaje="Libros"/>
    </>
  )

  return (

  <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/product/:id" element={<ItemDetail />} />
        <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
      </Routes>
    </Router>
  )
  
}

export default App
