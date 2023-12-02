import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import Button from "../button";

function Head(props) {
  const headClassName = props.isRounded ? "Head Rounded" : "Head";

  const callbacks = {
    onClick: props.onIsVisibleModal,
  };

  return (
    <div className={headClassName}>
      <h1 className="Head-title">{props.title}</h1>
      {props.isCart && <Button onClick={callbacks.onClick} title="закрыть" />}
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
