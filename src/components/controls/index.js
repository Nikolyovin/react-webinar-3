import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import Button from "../button";
import { formattedPrice, plural } from "../../utils";

function Controls(props) {
  // const quantityProduct = props.cart.length;
  const pluralWord = plural(props.quantityProduct, {
    one: "товар",
    few: "товара",
    many: "товаров",
  });
  // console.log("props", props);
  // const total = quantityProduct
  //   ? props.cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  //   : 0;
  console.log("props.quantityProduct", props.quantityProduct);
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

          <Button title="Перейти" onClick={props.onIsVisibleModal} />
        </>
      )}
    </div>
  );
}

Controls.propTypes = {
  // cart: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     code: PropTypes.number,
  //     price: PropTypes.number,
  //     quantity: PropTypes.number,
  //     title: PropTypes.string,
  //   })
  // ),
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
