import React from "react";
import Button from "../button";
import PropTypes from "prop-types";
import "./style.css";
import { formattedPrice } from "../../utils";

const Modal = ({ children, title, isVisible, onIsVisibleModal, total }) => {
  return (
    <div
      style={isVisible ? { display: "flex" } : { display: "none" }}
      className="Overlay"
    >
      <div className="Modal">
        <div className="Modal-content">{children}</div>
        <div className="Modal-footer">
          <span className="Modal-footer-text">Итого</span>{" "}
          <span className="Modal-footer-text">{`${formattedPrice(
            total
          )} ₽`}</span>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  total: PropTypes.number,
  isVisible: PropTypes.bool,
  onIsVisibleModal: PropTypes.func,
};

Modal.defaultProps = {
  onIsVisibleModal: () => {},
};
