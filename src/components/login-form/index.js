import { memo, useState } from "react";
import PropTypes from "prop-types";
import Item from "../item";
import "./style.css";
import Input from "../input";

function LoginForm({ onLogin, errorMessage }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(login, password);
    setLogin("");
    setPassword("");
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
      {errorMessage && <span className="LoginForm-error">{errorMessage}</span>}
      <button className="LoginForm-button" type="submit">
        Войти
      </button>
    </form>
  );
}

LoginForm.propTypes = {
  onLogin: PropTypes.func,
  errorMessage: PropTypes.string,
};

LoginForm.defaultProps = {
  onLogin: () => {},
};

export default memo(LoginForm);
