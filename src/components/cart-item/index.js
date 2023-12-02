import React from "react";
import PropTypes from "prop-types";
import { formattedPrice } from "../../utils";
import "./style.css";
import Button from "../button";

function CartItem(props) {
  const callbacks = {
    onClick: () => {
      props.onClick(props.item.code);
    },
  };

  return (
    <div className={"CartItem"}>
      <div className="CartItem-code">{props.item.code}</div>
      <div className="CartItem-title">{props.item.title}</div>
      <div className="CartItem-price">{formattedPrice(props.item.price)} ₽</div>
      <div className="CartItem-quantity">{props.item.quantity} шт</div>
      <div className="CartItem-actions">
        <Button
          title={"Удалить" }
          onClick={callbacks.onClick}
        />
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
  }).isRequired,
  onClick: PropTypes.func,
};

CartItem.defaultProps = {
  onClick: () => {},
};

export default React.memo(CartItem);
