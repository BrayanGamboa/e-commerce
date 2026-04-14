import "./App.css";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Guard from "./components/Guard";
import { CartProvider } from "./contexts/CartContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route
            path="/cart"
            element={
              <Guard>
                <Cart />
              </Guard>
            }
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
