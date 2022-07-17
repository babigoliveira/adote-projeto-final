import "./Card-style.css";

function Card({ title, children }) {
  return (
    <div className="card">
      <p className="card-title">{title}</p>
      <p className="card-text">{children}</p>
    </div>
  );
}

export default Card;
