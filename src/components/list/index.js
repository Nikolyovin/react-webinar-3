import React from "react";
import PropTypes from "prop-types";
import "./style.css";

function List(props) {
  const callbacks = {
    onClick: props.onClick,
  };

  return (
    <div className="List">
      {props.list.map((item) => (
        <div key={item.code} className="List-item">
           {React.cloneElement(props.children, {item: item, onClick: callbacks.onClick})}
        </div>
      ))}
    </div>
  );
}

List.propTypes = {
  children: PropTypes.node,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number,
      title: PropTypes.string,
      quantity: PropTypes.number,
      price: PropTypes.number,
    })
  ).isRequired,
  onClick: PropTypes.func,
};

List.defaultProps = {
  onClick: () => {},
};

export default React.memo(List);
