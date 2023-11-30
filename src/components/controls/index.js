import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import Button from "../button";
import { formattedPrice, plural } from "../../utils";

function Controls(props) {
  const pluralWord = plural(props.quantityProduct, {
    one: "товар",
    few: "товара",
    many: "товаров",
  });

  const callbacks = {
    onClick: props.onIsVisibleModal,
  };

  return (
    <div className="Controls">
      {props.isEmpty || (
        <>
          <span className="Controls-text">В корзине:</span>
          <span className="Controls-text-bold">
            {props.quantityProduct
              ? `${props.quantityProduct} ${pluralWord} / ${formattedPrice(
                  props.total
                )} ₽`
              : "пусто"}
          </span>

          <Button title="Перейти" onClick={callbacks.onClick} />
        </>
      )}
    </div>
  );
}

Controls.propTypes = {
  quantityProduct: PropTypes.number,
  total: PropTypes.number,
  onIsVisibleModal: PropTypes.func,
  isEmpty: PropTypes.bool,
};

Controls.defaultProps = {
  onIsVisibleModal: () => {},
  isEmpty: false,
};

export default React.memo(Controls);
