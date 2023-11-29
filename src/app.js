import React, { useCallback } from "react";
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
  };

  return (
    <PageLayout>
      <Head title="Магазин" isCart={false} />
      {/* <Controls onAdd={callbacks.onAddItem} /> */}
      <Controls cart={cart} />
      <List
        list={list}
        onDeleteItem={callbacks.onDeleteItem}
        onSelectItem={callbacks.onSelectItem}
        onAddItem={callbacks.onAddItem}
      />
      <Modal title={"Корзина"} isVisible={true}>
        <p>текст модалки</p>
      </Modal>
    </PageLayout>
  );
}

export default App;
