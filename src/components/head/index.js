import { memo } from "react";
import PropTypes from "prop-types";
import "./style.css";
import { translations } from "../../translations";

function Head({ title, setIsTranslation, isTranslation }) {
  const lang = isTranslation ? "en" : "ru";
  return (
    <div className="Head">
      <h1>{title}</h1>
      <div className="Head-language">
        <span className="Head-text">{translations[lang].language}:</span>
        <button onClick={setIsTranslation}>{translations[lang].LANG}</button>
      </div>
    </div>
  );
}

Head.propTypes = {
  title: PropTypes.node,
};

export default memo(Head);
