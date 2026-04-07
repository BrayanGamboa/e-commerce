import "./style/Card.css";

function Card({ title, text, img }) {
  return (
    <>
      <div className="card">
        <h2>{title}</h2>
        <p>{text}</p>
        <span className="emoji">{img}</span>
      </div>
    </>
  );
}

export default Card;
