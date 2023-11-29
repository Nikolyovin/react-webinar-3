import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import Button from "../button";
import { formattedPrice, plural } from "../../utils";

function Controls(props) {
  const quantityProduct = props.cart.length;
  const pluralWord = plural(quantityProduct, {
    one: "товар",
    few: "товара",
    many: "товаров",
  });

  const total = quantityProduct
    ? props.cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    : 0;

  console.log(total);

  return (
    <div className="Controls">
      <span className="Controls-text">В корзине:</span>
      <span className="Controls-text-bold">
        {quantityProduct
          ? `${quantityProduct} ${pluralWord} / ${formattedPrice(total)} ₽`
          : "пусто"}
      </span>
      <Button title="Перейти" />
    </div>
  );
}

Controls.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number,
      price: PropTypes.number,
      quantity: PropTypes.number,
      title: PropTypes.string,
    })
  ).isRequired,
  onAdd: PropTypes.func,
};

Controls.defaultProps = {
  onAdd: () => {},
};

export default React.memo(Controls);
