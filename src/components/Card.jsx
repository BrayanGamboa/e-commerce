import "../style/Card.css";
import { Link } from "react-router-dom";

function Card({ title, text, img, id, ruta }) {
  return (
    <>
      <div className="card">
        {img && typeof img === "string" && img.startsWith("http") ? (
          <img src={img} alt={title} className="card-img" />
        ) : (
          <span className="emoji">{img}</span>
        )}
        <h2>{title}</h2>
        <p>{text}</p>
        {id && (
          <Link to={`/product/${id}`}>
            <button>Ver Más</button>
          </Link>
        )}
        {ruta && !id && (
          <Link to={ruta}>
            <button>Ir</button>
          </Link>
        )}
      </div>
    </>
  );
}

export default Card;
