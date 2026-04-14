import "../style/Home.css";
import Card from "./Card";
import { useCart } from "../contexts/CartContext";

function Home() {
  const { isLogged, setIsLogged } = useCart();

  const opciones = [
    {
      id: 1,
      nombre: "Productos",
      descripcion:
        "Explora nuestra amplia gama de productos disponibles para comprar.",
      ruta: "/products",
    },
    {
      id: 2,
      nombre: "Carrito",
      descripcion:
        "Revisa los productos que has agregado a tu carrito de compras.",
      ruta: "/cart",
    },
    {
      id: 3,
      nombre: "Perfil",
      descripcion:
        "Gestiona tu perfil de usuario y tus preferencias de compra.",
      ruta: "/profile",
    },
  ];

  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="hero-copy">
          <span className="eyebrow">Bienvenido</span>
          <h1>Tu tienda de compras rápida y moderna</h1>
          <p>
            Descubre productos reales de FakeStore, navega por el catálogo y
            agrega tus favoritos al carrito con total seguridad.
          </p>
          <button onClick={() => setIsLogged(!isLogged)}>
            {isLogged ? "Cerrar sesión" : "Iniciar sesión"}
          </button>
        </div>
      </section>

      <section className="home-sections">
        {opciones.map((opcion) => (
          <Card
            key={opcion.id}
            title={opcion.nombre}
            text={opcion.descripcion}
            ruta={opcion.ruta}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;
