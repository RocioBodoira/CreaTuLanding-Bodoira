import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button/Button'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'


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
}

export default App
