import React, { useCallback, useEffect } from "react";
import Head from "../../components/head";
import BasketTool from "../../components/basket-tool";
import PageLayout from "../../components/page-layout";
import useStore from "../../store/use-store";
import useSelector from "../../store/use-selector";
import { useParams } from "react-router-dom";
import ProductDescription from "../../components/product-description";

const Product = () => {
  const store = useStore();
  const { id: idParams } = useParams();

  const select = useSelector((state) => ({
    currentProduct: state.product.currentProduct,
    list: state.catalog.list,
    totalItems: state.catalog.totalItems,
    limit: state.catalog.limit,
    currentPage: state.catalog.currentPage,
    amount: state.basket.amount,
    sum: state.basket.sum,
  }));

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
    // setCurrentPage: useCallback(
    //   (page) => store.actions.catalog.setCurrentPage(page),
    //   [store]
    // ),
  };

  useEffect(() => {
    store.actions.product.loadOne(idParams);
    // console.log("select", select.currentProduct.title);
  }, [idParams]);

  return (
    <PageLayout>
      <Head title={select.currentProduct.title} />
      <BasketTool
        onOpen={callbacks.openModalBasket}
        amount={select.amount}
        sum={select.sum}
      />
      <ProductDescription {...select.currentProduct} />
    </PageLayout>
  );
};

export default Product;
