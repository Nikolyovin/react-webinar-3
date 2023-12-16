import { memo, useCallback, useEffect, useMemo } from "react";
import useStore from "../../hooks/use-store";
import useSelector from "../../hooks/use-selector";
import useTranslate from "../../hooks/use-translate";
import PageLayout from "../../components/page-layout";
import Head from "../../components/head";
import Navigation from "../../containers/navigation";
import LocaleSelect from "../../containers/locale-select";
import Header from "../../components/header";
import UserData from "../../components/user-data";
import { useNavigate } from "react-router-dom";

function Profile() {
  const store = useStore();
  const navigate = useNavigate();
  const token = localStorage.getItem("token")

  const select = useSelector((state) => ({
    username: state.login.username,
    isAuth: state.login.isAuth,
    user: state.profile.user,
  }));

  const { t } = useTranslate();

  const callbacks = {
    onNavigate: useCallback(() => navigate("/login"), [store]),
    onLogout: useCallback(() => store.actions.login.logout(), [store]),
    getUser: useCallback(() => store.actions.profile.getUser(), [store]),
  };

  useEffect(() => {
    !token ? navigate('/login') : callbacks.getUser();
  }, [select.isAuth]);

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
      <UserData {...select.user} />
    </PageLayout>
  );
}

export default memo(Profile);
