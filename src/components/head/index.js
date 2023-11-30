import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import Button from "../button";

function Head({ title, isCart, onIsVisibleModal, isRounded }) {
  const headClassName = isRounded ? "Head Rounded" : "Head";
  return (
    <div className={headClassName}>
      <h1>{title}</h1>
      {isCart && <Button onClick={onIsVisibleModal} title="закрыть" />}
    </div>
  );
}

Head.propTypes = {
  title: PropTypes.node,
  isCart: PropTypes.bool.isRequired,
  isRounded: PropTypes.bool,
  onIsVisibleModal: PropTypes.func,
};

Head.defaultProps = {
  onIsVisibleModal: () => {},
};

export default React.memo(Head);
