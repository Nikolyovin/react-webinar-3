import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import Button from "../button";

function Head({ title, isCart }) {
  return (
    <div className="Head">
      <h1>{title}</h1>
      {isCart && <Button title="закрыть" />}
    </div>
  );
}

Head.propTypes = {
  title: PropTypes.node,
  isCart: PropTypes.bool.isRequired,
};

export default React.memo(Head);
