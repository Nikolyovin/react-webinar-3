import { memo, useState } from "react";
import PropTypes from "prop-types";
import Item from "../item";
import "./style.css";
import Input from "../input";

function LoginForm() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(login, password);
  };

  return (
    <form onSubmit={handleSubmit} className="LoginForm">
      <h3 className="LoginForm-title">Вход</h3>
      <label className="LoginForm-label">Логин</label>
      <Input type="text" delay={0} value={login} onChange={setLogin} />
      <label className="LoginForm-label">Пароль</label>
      <Input
        type="password"
        delay={0}
        value={password}
        onChange={setPassword}
      />
      <span className="LoginForm-error">Ошибки какие-то</span>
      <button className="LoginForm-button" type="submit">
        Войти
      </button>
    </form>
  );
}

// List.propTypes = {
//   list: PropTypes.arrayOf(PropTypes.shape({
//     _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
//   })).isRequired,
//   renderItem: PropTypes.func,
// };

// List.defaultProps = {
//   renderItem: (item) => {
//   },
// }

export default memo(LoginForm);
