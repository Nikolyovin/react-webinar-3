/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.listeners = []; // Слушатели изменений состояния
  }

  /**
   * Подписка слушателя на изменения состояния
   * @param listener {Function}
   * @returns {Function} Функция отписки
   */
  subscribe(listener) {
    this.listeners.push(listener);
    // Возвращается функция для удаления добавленного слушателя
    return () => {
      this.listeners = this.listeners.filter((item) => item !== listener);
    };
  }

  /**
   * Выбор состояния
   * @returns {Object}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка состояния
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState;
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }

  /**
   * Добавление товара в корзину
   */
  addItem(itemId) {
    const isNew = !this.state.cart.some(({ code }) => code === itemId);
    if (!isNew) {
      const updateCart = this.state.cart.map((item) =>
        item.code === itemId ? { ...item, quantity: item.quantity + 1 } : item
      );

      this.setState({ ...this.state, cart: updateCart });
    } else {
      const itemToAdd = this.state.list.find((item) => item.code === itemId);

      if (itemToAdd) {
        this.setState({
          ...this.state,
          cart: [...this.state.cart, { ...itemToAdd, quantity: 1 }],
        });
      }
    }

    this.setState({
      ...this.state,
      quantityProduct: this.state.cart.length,
      total: this.state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    })
  }

  /**
   * Удаление товара по коду
   * @param code
   */
  deleteItem(code) {
    this.setState({
      ...this.state,
      cart: this.state.cart.filter((item) => item.code !== code),
    });
    
    this.setState({
      ...this.state,
      quantityProduct: this.state.cart.length,
      total: this.state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    });
  }
}

export default Store;
