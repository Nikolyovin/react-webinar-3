import React from "react";
import "./style.css";
import PropTypes from "prop-types";

function Button(props) {
  return (
    <div>
      <button className="Button">{props.title}</button>
    </div>
  );
}

export default Button;

Button.propTypes = {
  title: PropTypes.string.isRequired,
  //   onDelete: PropTypes.func,
  //   onSelect: PropTypes.func,
};

// Button.defaultProps = {
//     onDelete: () => {},
//     onSelect: () => {},
// };
