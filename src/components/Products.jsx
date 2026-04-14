import "../style/Products.css";
import Card from "./Card";
import useFetch from "../hooks/useFetch";

export default function Products() {
  const {
    data: products,
    loading,
    error,
  } = useFetch("https://fakestoreapi.com/products");

  if (loading)
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Cargando productos...</p>
      </div>
    );
  if (error)
    return (
      <div className="error">
        <p>Error: {error}</p>
      </div>
    );

  return (
    <>
      <h1>Productos</h1>
      <div className="products">
        {products.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            text={product.description}
            img={product.image}
            id={product.id}
          />
        ))}
      </div>
    </>
  );
}
