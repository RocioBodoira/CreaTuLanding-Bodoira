function ItemDetail({ product }) {
    return (
      <div>
        <h2>{product.name}</h2>
        <p>Categoría: {product.category}</p>
        <p>Precio: ${product.price}</p>
        <button>Agregar al carrito</button>
      </div>
    );
  }
  
  export default ItemDetail;