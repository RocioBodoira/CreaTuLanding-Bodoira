import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../mockData";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


function ItemListContainer() {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      getProducts().then((data) => {
        if (id) {
          setProducts(data.filter((product) => product.category === id));
        } else {
          setProducts(data);
        }
      });
    }, [id]);
  
    return <ItemList products={products} />;
  }

function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id).then((data) => setProduct(data));
  }, [id]);

  return product ? <ItemDetail product={product} /> : <p>Cargando...</p>;
}

export default ItemDetailContainer;