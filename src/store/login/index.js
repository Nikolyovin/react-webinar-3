import StoreModule from "../module";

class LoginState extends StoreModule {

  initState() {
    return {
      username: '',
      isAuth: JSON.parse(localStorage.getItem('isAuth'))
    //   sum: 0,
    //   amount: 0
    }
  }

  async login(login, password){
    const payload = {login, password}
    const response = await fetch('/api/v1/users/sign', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    const json = await response.json()
    console.log('json', json);

    localStorage.setItem('token', json.result.token)
    localStorage.setItem('isAuth', true)

    this.setState(
        {
          ...this.getState(),
          username: json.result.user.profile.name,
          isAuth: true
        },
        "Авторизация прошла успешно!"
      );
  }
}
export default LoginState;
