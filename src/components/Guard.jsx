import { Navigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

function Guard({ children }) {
  const { isLogged } = useCart();

  if (!isLogged) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default Guard;
