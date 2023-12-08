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
    amount: state.basket.amount,
    sum: state.basket.sum,
    isTranslation: state.common.isTranslation,
  }));

  const callbacks = {
    addToBasket: useCallback(
      (_id) => store.actions.basket.addToBasket(_id),
      [store]
    ),
    openModalBasket: useCallback(
      () => store.actions.modals.open("basket"),
      [store]
    ),
    setIsTranslation: useCallback(
      () => store.actions.common.setIsTranslation(),
      [store]
    ),
  };

  useEffect(() => {
    store.actions.product.loadOne(idParams);
  }, [idParams]);

  return (
    <PageLayout>
      <Head
        setIsTranslation={callbacks.setIsTranslation}
        isTranslation={select.isTranslation}
        title={select.currentProduct.title}
      />
      <BasketTool
        isTranslation={select.isTranslation}
        onOpen={callbacks.openModalBasket}
        amount={select.amount}
        sum={select.sum}
      />
      <ProductDescription
        isTranslation={select.isTranslation}
        {...select.currentProduct}
        addToBasket={callbacks.addToBasket}
      />
    </PageLayout>
  );
};

export default Product;
