import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useCart } from "../contexts/CartContext";
import "../style/ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const {
    data: product,
    loading,
    error,
  } = useFetch(`https://fakestoreapi.com/products/${id}`);
  const { addToCart } = useCart();

  if (loading)
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Cargando producto...</p>
      </div>
    );
  if (error)
    return (
      <div className="error">
        <p>Error: {error}</p>
      </div>
    );

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p className="price">${product.price}</p>
      <button onClick={() => addToCart(product)}>Añadir a Carrito</button>
    </div>
  );
}

export default ProductDetail;
