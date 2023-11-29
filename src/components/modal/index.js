import React from "react";
import Button from "../button";
import PropTypes from "prop-types";
import "./style.css";
import Head from "../head";

const Modal = ({ children, title, isVisible, onIsVisibleModal }) => {
  console.log("isVisible", isVisible);
  return (
    // <div className={isVisible ? "Modal-active" : "Modal"}>
    <div style={ isVisible ? {display: 'flex' }: {display: 'none' }} className="Overlay">
    <div className="Modal">
      {/* <div className="Modal-head">
        <h3>{title}</h3>
        <Button title="закрыть" />
      </div> */}
      <Head title="Корзина" isCart={true} onIsVisibleModal={onIsVisibleModal}/>
      <div className="Modal-content">{children}</div>
    </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  isVisible: PropTypes.bool,
  onIsVisibleModal: PropTypes.func
};

Modal.defaultProps = {
  onIsVisibleModal: () => {},
};
