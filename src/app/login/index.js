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

function Login() {
  const store = useStore();

  const navigate = useNavigate();

  //   useInit(() => {
  //     store.actions.article.load(params.id);
  //   }, [params.id]);

  const select = useSelector((state) => ({
    // article: state.article.data,
    // waiting: state.article.waiting,
  }));

  const { t } = useTranslate();

  const callbacks = {
    onNavigate: useCallback(() => navigate("/login"), [store]),
  };

  return (
    <PageLayout>
      <Header onNavigate={callbacks.onNavigate} />
      <Head title={t("title")}>
        <LocaleSelect />
      </Head>
      <Navigation />
      <LoginForm />
    </PageLayout>
  );
}

export default memo(Login);
