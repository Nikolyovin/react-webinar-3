import { memo, useCallback, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import useStore from "../../hooks/use-store";
import useSelector from "../../hooks/use-selector";
import useTranslate from "../../hooks/use-translate";
import useInit from "../../hooks/use-init";
import PageLayout from "../../components/page-layout";
import Head from "../../components/head";
import Navigation from "../../containers/navigation";
import LocaleSelect from "../../containers/locale-select";
import Header from "../../components/header";
import UserData from "../../components/user-data";
import { useNavigate } from "react-router-dom";

/**
 * Страница товара с первичной загрузкой товара по id из url адреса
 */
function Profile() {
  const store = useStore();
  const navigate = useNavigate();

  const select = useSelector((state) => ({
    username: state.login.username,
    isAuth: state.login.isAuth,
    user: state.login.user,
  }));

  const { t } = useTranslate();

  const callbacks = {
    onNavigate: useCallback(() => navigate("/login"), [store]),
    onLogout: useCallback(() => store.actions.login.logout(), [store]),
    getUser: useCallback(() => store.actions.login.getUser(), [store]),
  };

  useEffect(() => {
    callbacks.getUser();
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
