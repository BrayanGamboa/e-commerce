import { useCart } from "../contexts/CartContext";
import "../style/cart.css";

function Cart() {
  const { cart, removeFromCart, getTotal } = useCart();

  return (
    <div className="cart">
      <h1>Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div>
                  <h3>{item.title}</h3>
                  <p>${item.price}</p>
                  <button onClick={() => removeFromCart(item.id)}>
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h2>Total: ${getTotal().toFixed(2)}</h2>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
