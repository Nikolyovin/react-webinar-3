import React from "react";
import "./style.css";
import { cn as bem } from "@bem-react/classname";
import { numberFormat } from "../../utils";
import { translations } from "../../translations";

const ProductDescription = (props) => {
  const cn = bem("ProductDescription");
  const lang = props.isTranslation ? "en" : "ru";

  const callbacks = {
    addToBasket: props.addToBasket,
  };

  return (
    <div className={cn()}>
      <p className={cn("text")}>{props.description}</p>
      <p className={cn("text")}>
        Категория:
        <span className={cn("textBold")}>{props.category?.title}</span>
      </p>
      <p className={cn("text")}>
        Страна производитель:
        <span className={cn("textBold")}>
          {props.madeIn?.title}({props.madeIn?.code})
        </span>
      </p>
      <p className={cn("text")}>
        Год выпуска:<span className={cn("textBold")}>{props.edition}</span>
      </p>
      <p className={cn("price")}>
        Цена:{" "}
        <span className={cn("price-left")}>{numberFormat(props.price)} ₽</span>
      </p>
      <button
        onClick={() => callbacks.addToBasket(props._id)}
        className={cn("button")}
      >
        {translations[lang].add}
      </button>
    </div>
  );
};

export default ProductDescription;
