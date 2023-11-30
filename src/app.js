import React, { useCallback, useState } from "react";
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import Modal from "./components/modal";

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {
  const list = store.getState().list;
  const cart = store.getState().cart;

  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const quantityProduct = cart.length;
  const total = quantityProduct
    ? cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    : 0;

  const callbacks = {
    onDeleteItem: useCallback(
      (code) => {
        store.deleteItem(code);
      },
      [store]
    ),

    onSelectItem: useCallback(
      (code) => {
        store.selectItem(code);
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
      {/* <Controls onAdd={callbacks.onAddItem} /> */}
      <Controls
        total={total}
        quantityProduct={quantityProduct}
        onIsVisibleModal={callbacks.onIsVisibleModal}
      />
      <List
        list={list}
        // onDeleteItem={callbacks.onDeleteItem}
        onSelectItem={callbacks.onSelectItem}
        onClick={callbacks.onAddItem}
      />
      <Modal
        title={"Корзина"}
        isVisible={isVisibleModal}
        total={total}
        // onIsVisibleModal={callbacks.onIsVisibleModal}
      >
        <Head
          isRounded={true}
          title="Корзина"
          isCart={true}
          onIsVisibleModal={callbacks.onIsVisibleModal}
        />
        <Controls isEmpty={true} />
        <List
          list={cart}
          onClick={callbacks.onDeleteItem}
          // onSelectItem={callbacks.onSelectItem}
          // onAddItem={callbacks.onAddItem}
        />
        {/* <div className=""></div> */}
      </Modal>
    </PageLayout>
  );
}

export default App;
