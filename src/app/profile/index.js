import { memo, useCallback, useMemo } from "react";
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

function Profile() {
  const store = useStore();

//   const navigate = useNavigate();

//   const select = useSelector((state) => ({
//     // article: state.article.data,
//     // waiting: state.article.waiting,
//     username: state.login.username,
//     isAuth: state.login.isAuth
//   }));

  const { t } = useTranslate();

  const callbacks = {
    onNavigate: useCallback(() => navigate("/login"), [store]),
    onLogin: useCallback((login, password) => store.actions.login.login(login, password), [store]),
  };

  return (
    <PageLayout>
      {/* <Header onNavigate={callbacks.onNavigate} username={select.username} isAuth={select.isAuth}/>
      <Head title={t("title")}>
        <LocaleSelect />
      </Head>
      <Navigation />
      <LoginForm onLogin={callbacks.onLogin}/> */}
      <div>Profile</div>
    </PageLayout>
  );
}

export default memo(Profile);
