import React from 'react'
import { useEffect, useState } from "react";
import { getProducts } from "../mockData";
import ItemList from "./ItemList";

function ItemListContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return <ItemList products={products} />;
}

const ItemListContainer = ({mensaje}) => {
  return (

    <div>{mensaje}</div>
  
  )
}

export default ItemListContainer