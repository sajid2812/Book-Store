import React from "react";
import { useHistory } from "react-router-dom";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct(props) {
  const { id, image, title, price, rating, author, hideButton } = props;
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  const history = useHistory();
  const handleClick = (e) => {
    dispatch({
      type: "SET_BOOK",
      book: e,
    });
    history.push("/details");
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />
      <div className="checkoutProduct__info">
        <h3 className="checkoutProduct__title">{title}</h3>
        <h5>
          <span>by</span> {author}
        </h5>
        <p clasName="checkoutProduct__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button
          onClick={() => handleClick(props)}
          className="checkoutProduct__detailsButton"
        >
          Details
        </button>
        {!hideButton && <button onClick={removeFromBasket}>Remove</button>}
      </div>
    </div>
  );
}

export default CheckoutProduct;
