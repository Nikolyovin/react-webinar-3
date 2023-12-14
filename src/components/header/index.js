import { memo } from "react";
import PropTypes from "prop-types";
import "./style.css";
import SideLayout from "../side-layout";
import { Link } from "react-router-dom";

function Header({ onNavigate, isAuth, username, onLogout }) {
  const onClick = () => (isAuth ? onLogout() : onNavigate());

  return (
    <SideLayout side={"end"} padding={"small"}>
      <header className="Header">
        {isAuth && (
          <Link className="Header-link" to="/profile">
            {username}
          </Link>
        )}
        <button className="Header-button" onClick={onClick}>
          {isAuth ? "Выход" : "Вход"}
        </button>
      </header>
    </SideLayout>
  );
}

Header.propTypes = {
  onNavigate: PropTypes.func,
  onLogout: PropTypes.func,
  isAuth: PropTypes.bool,
  username: PropTypes.string,
};

Header.defaultProps = {
  onNavigate: () => {},
  onLogout: () => {},
};

export default memo(Header);
