export const products = [
    { id: "1", name: "Libro A", category: "novelas", price: 100 },
    { id: "2", name: "Libro B", category: "ficción", price: 200 },
    // Más productos
  ];
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(products), 1000);
    });
  };
  
  export const getProductById = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(products.find((p) => p.id === id)), 1000);
    });
  };