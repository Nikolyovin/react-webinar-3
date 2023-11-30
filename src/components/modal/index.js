import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import { formattedPrice } from "../../utils";

const Modal = (props) => {
  return (
    <div
      style={props.isVisible ? { display: "flex" } : { display: "none" }}
      className="Overlay"
    >
      <div className="Modal">
        <div className="Modal-content">{props.children}</div>
        <div className="Modal-footer">
          <span className="Modal-footer-text">Итого</span>
          <span className="Modal-footer-text">{`${formattedPrice(
            props.total
          )} ₽`}</span>
        </div>
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.node,
  total: PropTypes.number,
  isVisible: PropTypes.bool,
};
