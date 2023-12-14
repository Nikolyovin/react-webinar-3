import { memo } from "react";
import PropTypes from "prop-types";
import "./style.css";

function UserData({ email, name, phone }) {
  return (
    <div className="UserData">
      <h3 className="UserData-title">Профиль</h3>
      <ul className="UserData-list">
        <li className="UserData-item">
          Имя:<span className="UserData-item-bold">{name}</span>
        </li>
        <li className="UserData-item">
          Телефон:<span className="UserData-item-bold">{phone}</span>
        </li>
        <li className="UserData-item">
          email:<span className="UserData-item-bold">{email}</span>
        </li>
      </ul>
    </div>
  );
}

UserData.propTypes = {
  email: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string,
};

export default memo(UserData);
