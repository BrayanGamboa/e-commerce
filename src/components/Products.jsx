import "./style/Products.css";
import Card from "./Card";

export default function Products() {
  const food = [
    {
      id: 1,
      title: "Perrito Caliente",
      text: "Delicioso perrito caliente",
      img: "🌭",
    },
    {
      id: 2,
      title: "Hamburguesa",
      text: "Sabrosa hamburguesa",
      img: "🍔",
    },
    {
      id: 3,
      title: "Pizza",
      text: "Exquisita pizza",
      img: "🍕",
    },
    {
      id: 4,
      title: "Taco",
      text: "Auténtico taco",
      img: "🌮",
    },
    {
      id: 5,
      title: "Sushi",
      text: "Fresco sushi",
      img: "🍣",
    },
    {
      id: 6,
      title: "Helado",
      text: "Dulce helado",
      img: "🍦",
    },
  ];

  return <>
    <h1>Productos</h1>
    <div className="products">
      {food.map((item) => (
        <Card key={item.id} title={item.title} text={item.text} img={item.img} />
      ))}
    </div>
  </>;
}
