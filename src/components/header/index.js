import { memo } from "react";
import PropTypes from "prop-types";
import "./style.css";
import SideLayout from "../side-layout";
import { Link } from "react-router-dom";

function Header({ onNavigate, isAuth, username }) {
  return (
    <SideLayout side={"end"} padding={"small"}>
      <header className="Header">
        {isAuth && <Link to='/profile'>{username}</Link>}
        <button className="Header-button" onClick={() => onNavigate()}>
          {isAuth ? 'Выход' : 'Вход'}
        </button>
      </header>
    </SideLayout>
  );
}

Header.propTypes = {
  onNavigate: PropTypes.func,
  isAuth: PropTypes.bool,
  username: PropTypes.string,
};

Header.defaultProps = {
  onNavigate: () => {},
};

export default memo(Header);
