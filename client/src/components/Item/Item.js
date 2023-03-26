import { Button } from "../index";

import "./styles.scss";

const getCondition = (condition) => {
  switch (condition) {
    case "new":
      return "Nuevo";
    case "used":
      return "Usado";
    case "not_specified":
      return "Condición no especificada";
    default:
      return condition;
  }
};

export const Item = ({ item }) => {
  const { picture, title, condition, sold_quantity, price, description } = item;

  return (
    <div className="item">
      <div>
        <img className="product-image" src={picture} alt={title} />
        <div>
          <h3 className="description-title">Descripción del producto</h3>
          <p className="description">{description}</p>
        </div>
      </div>
      <div className="information-container">
        <span className="condition-solds">
          {getCondition(condition)} - {sold_quantity} vendidos
        </span>
        <h1 className="title">{title}</h1>
        <p className="price">
          $ {parseInt(price.amount).toLocaleString("es-AR")}
        </p>
        <Button>Comprar</Button>
      </div>
    </div>
  );
};
