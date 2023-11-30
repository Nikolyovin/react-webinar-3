import React from "react";
import "./style.css";
import PropTypes from "prop-types";

function Button(props) {
  const callbacks = {
    onClick: props.onClick,
  };

  return (
    <div>
      <button onClick={callbacks.onClick} className="Button">
        {props.title}
      </button>
    </div>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
