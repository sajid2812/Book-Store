import { useHistory } from "react-router-dom";
import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product(props) {
  const [{}, dispatch] = useStateValue();

  const history = useHistory();
  const handleClick = (e) => {
    dispatch({
      type: "SET_BOOK",
      book: e,
    });
    history.push("/details");
  };

  return (
    <div className="product">
      <div className="product__card">
        <div>
          <img
            onClick={() => handleClick(props)}
            className="product__image"
            src={props.image}
            alt=""
          />
        </div>
        <h5>
          <span>by</span> {props.author}
        </h5>
      </div>
    </div>
  );
}

export default Product;
