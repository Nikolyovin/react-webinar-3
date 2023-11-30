import React from "react";
import PropTypes from "prop-types";
import { formattedPrice } from "../../utils";
import "./style.css";
import Button from "../button";

function Item(props) {
  const callbacks = {
    onClick: () => {
      props.onClick(props.item.code);
    },
  };

  return (
    <div className={"Item"}>
      <div className="Item-code">{props.item.code}</div>
      <div className="Item-title">{props.item.title}</div>
      <div className="Item-price">{formattedPrice(props.item.price)} ₽</div>
      {props.item.quantity && (
        <div className="Item-quantity">{props.item.quantity} ШТ</div>
      )}
      <div className="Item-actions">
        <Button
          title={props.item.quantity ? "Удалить" : "Добавить"}
          onClick={callbacks.onClick}
        />
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
  }).isRequired,
  onClick: PropTypes.func,
};

Item.defaultProps = {
  onClick: () => {},
};

export default React.memo(Item);
