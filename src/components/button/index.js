import React from "react";
import "./style.css";
import PropTypes from "prop-types";

function Button(props) {
  return (
    <div>
      <button onClick={props.onClick} className="Button">{props.title}</button>
    </div>
  );
}

export default Button;

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  //   onSelect: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => {},
//     onSelect: () => {},
};
