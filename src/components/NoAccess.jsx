import { Link } from "react-router-dom";
import "../style/NoAccess.css";

function NoAccess() {
  return (
    <main className="no-access">
      <div className="no-access__card">
        <span className="no-access__eyebrow">Acceso restringido</span>
        <h1>No tienes acceso</h1>
        <p>
          Debes iniciar sesion para entrar al carrito y ver los productos que
          agregaste.
        </p>
        <div className="no-access__actions">
          <Link to="/" className="no-access__primary">
            Ir al inicio
          </Link>
          <Link to="/products" className="no-access__secondary">
            Seguir comprando
          </Link>
        </div>
      </div>
    </main>
  );
}

export default NoAccess;
