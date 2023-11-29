import React, { useState } from "react";
import PropTypes from "prop-types";
import { formattedPrice } from "../../utils";
import "./style.css";
import Button from "../button";

function Item(props) {
  // Счётчик выделений
  // const [count, setCount] = useState(0);

  const callbacks = {
    onClick: () => {
      props.onAdd(props.item.code);
      console.log("id", props.item.code);
      // if (!props.item.selected) {
      //   setCount(count + 1);
      // }
    },
    // onDelete: (e) => {
    //   e.stopPropagation();
    //   props.onDelete(props.item.code);
    // },
  };

  return (
    <div
      className={"Item"}
      
    >
      <div className="Item-code">{props.item.code}</div>
      <div className="Item-title">{props.item.title}</div>
      <div className="Item-price">{formattedPrice(props.item.price)} ₽</div>
      <div className="Item-actions">
        {/* <button onClick={callbacks.onDelete}>Добавить</button> */}
        <Button title="Добавить" onClick={callbacks.onClick}/>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    // selected: PropTypes.bool,
    price: PropTypes.number,
  }).isRequired,
  onDelete: PropTypes.func,
  onSelect: PropTypes.func,
  onAdd: PropTypes.func,
};

Item.defaultProps = {
  onDelete: () => {},
  onSelect: () => {},
  onAdd: () => {},
};

export default React.memo(Item);
