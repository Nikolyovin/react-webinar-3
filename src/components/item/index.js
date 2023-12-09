import { memo, useState } from "react";
import PropTypes from "prop-types";
import { cn as bem } from "@bem-react/classname";
import { numberFormat } from "../../utils";
import "./style.css";
import { Link } from "react-router-dom";
import { translations } from "../../translations";

function Item(props) {
  const lang = props.isTranslation ? "en" : "ru";
  const cn = bem("Item");

  const callbacks = {
    onAdd: (e) => props.onAdd(props.item._id),
  };

  return (
    <div className={cn()}>
      <div
        className={cn("title")}
      >
        <Link className={cn("titleLink")} to={`/app/${props.item._id}`}>{props.item.title}</Link>
      </div>
      <div className={cn("actions")}>
        <div className={cn("price")}>{numberFormat(props.item.price)} ₽</div>
        <button onClick={callbacks.onAdd}>{translations[lang].add}</button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  onAdd: PropTypes.func,
  isTranslation: PropTypes.bool,
};

Item.defaultProps = {
  onAdd: () => {},
};

export default memo(Item);
