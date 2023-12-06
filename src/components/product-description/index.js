import React from "react";
import "./style.css";

const ProductDescription = (props) => {
  //  props.madeIn;
  console.log(props.madeIn?.title);
  return (
    <div className="ProductDescription">
      <p className="ProductDescription-text">{props.description}</p>
      <p className="ProductDescription-country">
        Страна производитель:{" "}
        <span>
          {" "}
          {props.madeIn?.title}({props.madeIn?.code}){" "}
        </span>
      </p>
      <p className="ProductDescription-year">
        Год выпуска:{props.edition}
        <span>{/* {props.madeIn.title}({props.madeIn.code}) */}</span>
      </p>
      <p className="ProductDescription-price">
        цена:{props.price}
        <span>{/* {props.madeIn.title}({props.madeIn.code}) */}</span>
      </p>
    </div>
  );
};

export default ProductDescription;
