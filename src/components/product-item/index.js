import React from "react";
import PropTypes from "prop-types";
import { formattedPrice } from "../../utils";
import "./style.css";
import Button from "../button";

function ProductItem(props) {
  const callbacks = {
    onClick: () => {
      props.onClick(props.item.code);
    },
  };

  return (
    <div className={"ProductItem"}>
      <div className="ProductItem-code">{props.item.code}</div>
      <div className="ProductItem-title">{props.item.title}</div>
      <div className="ProductItem-price">{formattedPrice(props.item.price)} ₽</div>
      <div className="ProductItem-actions">
        <Button
          title={ "Добавить"}
          onClick={callbacks.onClick}
        />
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  onClick: PropTypes.func,
};

ProductItem.defaultProps = {
  onClick: () => {},
};

export default React.memo(ProductItem);
