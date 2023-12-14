import StoreModule from "../module";

class LoginState extends StoreModule {
  initState() {
    return {
      username: localStorage.getItem("username"),
      isAuth: JSON.parse(localStorage.getItem("isAuth")),
      errorMessage: "",
      user: {},
    };
  }

  async login(login, password) {
    const payload = { login, password };
    const response = await fetch("/api/v1/users/sign", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const json = await response.json();

    if (response.status === 200) {
      localStorage.setItem("token", json.result.token);
      localStorage.setItem("isAuth", true);
      localStorage.setItem("username", json.result.user.profile.name);

      this.setState(
        {
          ...this.getState(),
          username: json.result.user.profile.name,
          isAuth: true,
          errorMessage: "",
        },
        "Авторизация прошла успешно!"
      );
    } else {
      this.setState(
        {
          ...this.getState(),
          errorMessage: json.error.data.issues[0].message,
        },
        "Ошибка авторизации!"
      );
    }
  }

  async logout() {
    const response = await fetch("/api/v1/users/sign", {
      method: "DELETE",
      headers: {
        "X-Token": localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      localStorage.removeItem("token");
      localStorage.removeItem("isAuth");
      localStorage.removeItem("username");

      this.setState(
        {
          ...this.getState(),
          username: "",
          isAuth: false,
        },
        "Пользователь вышел!"
      );
    }
  }

  async getUser() {
    const response = await fetch("api/v1/users/self?fields=email,profile", {
      headers: {
        "X-Token": localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (response.status === 200) {
      const { email } = json.result;
      const { name, phone } = json.result.profile;

      this.setState(
        {
          ...this.getState(),
          user: { email, name, phone },
        },
        "Пользователь вышел!"
      );
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("isAuth");
      localStorage.removeItem("username");

      this.setState(
        {
          ...this.getState(),
          username: "",
          isAuth: false,
        },
        "Пользователь не авторизован!"
      );
    }
  }
}

export default LoginState;
