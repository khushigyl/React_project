import "../index.css";

function Button({ butt }) {
  return (
    <div className="button">
      <button id="cart">{butt}</button>
    </div>
  );
}

export default Button;
