import { memo, useCallback, useEffect, useMemo } from "react";
import useStore from "../../hooks/use-store";
import PageLayout from "../../components/page-layout";
import Header from "../../components/header";
import Head from "../../components/head";
import LocaleSelect from "../../containers/locale-select";
import Navigation from "../../containers/navigation";
import useSelector from "../../hooks/use-selector";
import useTranslate from "../../hooks/use-translate";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/login-form";

function Login() {
  const store = useStore();

  const navigate = useNavigate();
  const token = localStorage.getItem("token")

  const select = useSelector((state) => ({
    username: state.login.username,
    isAuth: state.login.isAuth,
    errorMessage: state.login.errorMessage,
  }));

  const { t } = useTranslate();

  const callbacks = {
    onNavigate: useCallback(() => navigate("/login"), [store]),
    onLogin: useCallback(
      (login, password) => store.actions.login.login(login, password),
      [store]
    ),
    onLogout: useCallback(() => store.actions.login.logout(), [store]),
    resetErrorMessage: useCallback(() => store.actions.login.resetErrorMessage(), [store]),
  };

  useEffect(() => {
    callbacks.resetErrorMessage()
    if (select.isAuth  && token && location.pathname === '/login') navigate(-1)
  },[select.isAuth])

  return (
    <PageLayout>
      <Header
        onLogout={callbacks.onLogout}
        onNavigate={callbacks.onNavigate}
        username={select.username}
        isAuth={select.isAuth}
      />
      <Head title={t("title")}>
        <LocaleSelect />
      </Head>
      <Navigation />
      <LoginForm
        onLogin={callbacks.onLogin}
        errorMessage={select.errorMessage}
      />
    </PageLayout>
  );
}

export default memo(Login);
