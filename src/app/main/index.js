import { memo, useCallback, useEffect } from "react";
import Item from "../../components/item";
import PageLayout from "../../components/page-layout";
import Head from "../../components/head";
import BasketTool from "../../components/basket-tool";
import List from "../../components/list";
import useStore from "../../store/use-store";
import useSelector from "../../store/use-selector";
import Pagination from "../../components/pagination";
import { translations } from "../../translations";

function Main() {
  const store = useStore();

  const select = useSelector((state) => ({
    list: state.catalog.list,
    totalItems: state.catalog.totalItems,
    limit: state.catalog.limit,
    currentPage: state.catalog.currentPage,
    amount: state.basket.amount,
    sum: state.basket.sum,
    isTranslation: state.common.isTranslation,
  }));

  useEffect(() => {
    store.actions.catalog.load();
  }, [select.currentPage]);

  const callbacks = {
    // Добавление в корзину
    addToBasket: useCallback(
      (_id) => store.actions.basket.addToBasket(_id),
      [store]
    ),
    // Открытие модалки корзины
    openModalBasket: useCallback(
      () => store.actions.modals.open("basket"),
      [store]
    ),
    setCurrentPage: useCallback(
      (page) => store.actions.catalog.setCurrentPage(page),
      [store]
    ),
    setIsTranslation: useCallback(
      () => store.actions.common.setIsTranslation(),
      [store]
    ),
  };

  const renders = {
    item: useCallback(
      (item) => {
        return (
          <Item
            item={item}
            isTranslation={select.isTranslation}
            onAdd={callbacks.addToBasket}
          />
        );
      },
      [callbacks.addToBasket, select.isTranslation]
    ),
  };

  const lang = select.isTranslation ? "en" : "ru";

  return (
    <PageLayout>
      <Head
        setIsTranslation={callbacks.setIsTranslation}
        isTranslation={select.isTranslation}
        title={translations[lang].store}
      />
      <BasketTool
        isTranslation={select.isTranslation}
        onOpen={callbacks.openModalBasket}
        amount={select.amount}
        sum={select.sum}
      />
      <List list={select.list} renderItem={renders.item} />
      <Pagination
        onChangePage={callbacks.setCurrentPage}
        totalItems={select.totalItems}
        limit={select.limit}
        currentPage={select.currentPage}
      />
    </PageLayout>
  );
}

export default memo(Main);
