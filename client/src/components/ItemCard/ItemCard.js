import { useNavigate } from "react-router-dom";

import freeShippingIcon from "../../assets/free-shipping.png";

import "./styles.scss";

export const ItemCard = ({ item }) => {
  const { id, title, picture, free_shipping, price, state } = item;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate({
      pathname: `/items/${id}`,
    });
  };

  return (
    <div className="item-card" onClick={handleClick}>
      <img className="thumbnail" src={picture} alt={title} />
      <div>
        <div className="price-container">
          <span>$ {parseInt(price.amount).toLocaleString("es-AR")}</span>
          {free_shipping && (
            <img
              src={freeShippingIcon}
              className="free-shipping"
              alt="Envío gratis"
            />
          )}
        </div>
        <h5 className="item-title">{title}</h5>
      </div>
      <span className="state">{state}</span>
    </div>
  );
};
