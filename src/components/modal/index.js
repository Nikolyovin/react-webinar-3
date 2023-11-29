import React from "react";
import Button from "../button";
import PropTypes from "prop-types";
import "./style.css";
import Head from "../head";

const Modal = ({ children, title, isVisible }) => {
  console.log("isVisible", isVisible);
  return (
    <div className={isVisible ? "Modal-active" : "Modal"}>
      {/* <div className="Modal-head">
        <h3>{title}</h3>
        <Button title="закрыть" />
      </div> */}
      <Head title="Корзина" isCart={true} />
      <div className="Modal-content">{children}</div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  isVisible: PropTypes.bool,
};
