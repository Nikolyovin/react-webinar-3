import React, { useCallback, useState } from "react";
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import Modal from "./components/modal";
import CartItem from "./components/cart-item";
import ProductItem from "./components/product-item";

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {
  const list = store.getState().list;
  const cart = store.getState().cart;
  const quantityProduct= store.getState().quantityProduct;
  const total = store.getState().total;

  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const callbacks = {
    onDeleteItem: useCallback(
      (code) => {
        store.deleteItem(code);
      },
      [store]
    ),

    onAddItem: useCallback(
      (code) => {
        store.addItem(code);
      },
      [store]
    ),

    onIsVisibleModal: useCallback(
      () => setIsVisibleModal(!isVisibleModal),
      [isVisibleModal]
    ),
  };

  return (
    <PageLayout>
      <Head title="Магазин" isCart={false} />
      <Controls
        total={total}
        quantityProduct={quantityProduct}
        onIsVisibleModal={callbacks.onIsVisibleModal}
      />
      <List list={list} onClick={callbacks.onAddItem} >
        <ProductItem/>
      </List>
      <Modal title={"Корзина"} isVisible={isVisibleModal} total={total}>
        <Head
          isRounded={true}
          title="Корзина"
          isCart={true}
          onIsVisibleModal={callbacks.onIsVisibleModal}
        />
        <Controls isEmpty={true} />
        <List list={cart} onClick={callbacks.onDeleteItem} >
          <CartItem />
        </List>
      </Modal>
    </PageLayout>
  );
}

export default App;
