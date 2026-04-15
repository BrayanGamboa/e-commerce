import { useEffect, useState } from "react";
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
  const [cartFeedback, setCartFeedback] = useState("idle");

  useEffect(() => {
    if (cartFeedback === "idle") {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setCartFeedback("idle");
    }, 1800);

    return () => window.clearTimeout(timeoutId);
  }, [cartFeedback]);

  const handleAddToCart = () => {
    addToCart(product);
    setCartFeedback("added");
  };

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
      <div className="product-detail__actions">
        <button
          className={cartFeedback === "added" ? "is-added" : ""}
          onClick={handleAddToCart}
        >
          {cartFeedback === "added"
            ? "Agregado al carrito"
            : "Añadir a Carrito"}
        </button>
        <p
          className={`cart-feedback ${cartFeedback === "added" ? "is-visible" : ""}`}
          aria-live="polite"
        >
          El producto se agrego correctamente.
        </p>
      </div>
    </div>
  );
}

export default ProductDetail;
