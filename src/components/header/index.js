import { memo } from "react";
import PropTypes from "prop-types";
import "./style.css";
import SideLayout from "../side-layout";

function Header({ onNavigate }) {
  return (
    <SideLayout side={"end"} padding={"small"}>
      <header className="Header">
        <button className="Header-button" onClick={() => onNavigate()}>
          Вход
        </button>
      </header>
    </SideLayout>
  );
}

Header.propTypes = {
  onNavigate: PropTypes.func,
};

Header.defaultProps = {
  onNavigate: () => {},
};

export default memo(Header);
