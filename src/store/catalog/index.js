import { codeGenerator } from "../../utils";
import StoreModule from "../module";

class Catalog extends StoreModule {
  constructor(store, name) {
    super(store, name);
    this.generateCode = codeGenerator(0);
  }

  initState() {
    return {
      list: [],
      totalItems: 0,
      limit: 10,
      currentPage: 1,
    };
  }

  async load() {
    const { limit, currentPage } = this.getState();

    const skip = (currentPage - 1) * limit;
    const response = await fetch(
      `api/v1/articles?limit=${limit}&skip=${skip}&fields=items(_id, title, price),count`
    );
    // const response = await fetch(`api/v1/articles?limit=*`);
    const json = await response.json();
    this.setState(
      {
        ...this.getState(),
        list: json.result.items,
        totalItems: json.result.count,
      },
      "Загружены товары из АПИ"
    );
  }

  async loadOne(id) {
    const response = await fetch(
      `api/v1/articles/${id}?fields=*,madeIn(title,code),category(title)`
    );
    // const response = await fetch(`api/v1/articles?limit=*`);
    const json = await response.json();
    console.log("json", json);
  }

  setCurrentPage(currentPage) {
    this.setState(
      {
        ...this.getState(),
        currentPage,
      },
      "Изменили страницу"
    );
  }
}

export default Catalog;
