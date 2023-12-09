import { memo } from "react";
import PropTypes from "prop-types";
import { cn as bem } from "@bem-react/classname";
import { numberFormat, plural } from "../../utils";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { translations } from "../../translations";
import Navbar from "../navbar";

function BasketTool({ sum, amount, onOpen, isTranslation }) {
  const lang = isTranslation ? "en" : "ru";
  const cn = bem("BasketTool");
  const navigate = useNavigate();
  return (
    <div className={cn()}>
      <Navbar lang={lang}/>
      <div>
        <span className={cn("label")}>{translations[lang].inTheCart}:</span>
        <span className={cn("total")}>
          {amount
            ? `${amount} ${plural(amount, {
                one: `${translations[lang].oneProduct}`,
                few: `${translations[lang].twoProduct}`,
                many: `${translations[lang].manyProduct}`,
              })} / ${numberFormat(sum)} ₽`
            : `${translations[lang].empty}`}
        </span>
        <button onClick={onOpen}>{translations[lang].goToCart}</button>
      </div>
    </div>
  );
}

BasketTool.propTypes = {
  onOpen: PropTypes.func.isRequired,
  sum: PropTypes.number,
  amount: PropTypes.number,
};

BasketTool.defaultProps = {
  onOpen: () => {},
  sum: 0,
  amount: 0,
};

export default memo(BasketTool);
