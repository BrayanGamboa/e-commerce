
import './Card.css'

function Card({ title, text, key }) {

  return (
    <>
      <div className="card" key={key}>
        {/* <img src={imageUrl} alt={title} /> */}
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </>
  );
}

export default Card
