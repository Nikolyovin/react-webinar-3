import StoreModule from "../module";

class Product extends StoreModule {
  
  initState() {
    return {
      currentProduct: {},
    };
  }

  async loadOne(id) {
    const response = await fetch(
      `api/v1/articles/${id}?fields=*_id, title, price, description, edition,madeIn(title,code),category(title)`
    );
    const json = await response.json();
    this.setState(
      {
        ...this.getState(),
        currentProduct: json.result,
      },
      "Загружен товар из АПИ по id"
    );
  }
}

export default Product;
