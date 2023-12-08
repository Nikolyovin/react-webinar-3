import { memo, useCallback } from "react";
import ItemBasket from "../../components/item-basket";
import List from "../../components/list";
import ModalLayout from "../../components/modal-layout";
import BasketTotal from "../../components/basket-total";
import useStore from "../../store/use-store";
import useSelector from "../../store/use-selector";
import { translations } from "../../translations";

function Basket() {
  const store = useStore();

  const select = useSelector((state) => ({
    list: state.basket.list,
    amount: state.basket.amount,
    sum: state.basket.sum,
    isTranslation: state.common.isTranslation,
  }));

  const callbacks = {
    // Удаление из корзины
    removeFromBasket: useCallback(
      (_id) => store.actions.basket.removeFromBasket(_id),
      [store]
    ),
    // Закрытие любой модалки
    closeModal: useCallback(() => store.actions.modals.close(), [store]),
  };

  const renders = {
    itemBasket: useCallback(
      (item) => {
        return (
          <ItemBasket
            item={item}
            closeModal={callbacks.closeModal}
            onRemove={callbacks.removeFromBasket}
            isTranslation={select.isTranslation}
          />
        );
      },
      [callbacks.removeFromBasket]
    ),
  };

  const lang = select.isTranslation ? "en" : "ru";

  return (
    <ModalLayout
      isTranslation={select.isTranslation}
      title={translations[lang].cart}
      onClose={callbacks.closeModal}
    >
      <List list={select.list} renderItem={renders.itemBasket} />
      <BasketTotal isTranslation={select.isTranslation} sum={select.sum} />
    </ModalLayout>
  );
}

export default memo(Basket);
