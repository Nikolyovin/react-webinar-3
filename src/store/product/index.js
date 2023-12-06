import { codeGenerator } from "../../utils";
import StoreModule from "../module";

class Product extends StoreModule {
  //   constructor(store, name) {
  //     super(store, name);
  //     this.generateCode = codeGenerator(0);
  //   }

  initState() {
    return {
      currentProduct: {},
    };
  }

  async loadOne(id) {
    const response = await fetch(
      `api/v1/articles/${id}?fields=*,madeIn(title,code),category(title)`
    );
    // const response = await fetch(`api/v1/articles?limit=*`);
    const json = await response.json();
    // console.log("json", json);
    this.setState(
      {
        ...this.getState(),
        currentProduct: json.result,
        //   totalItems: json.result.count,
      },
      "Загружен товар из АПИ по id"
    );
  }
}

export default Product;
