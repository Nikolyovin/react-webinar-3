import {codeGenerator} from "../../utils";
import StoreModule from "../module";

class Catalog extends StoreModule {

  constructor(store, name) {
    super(store, name);
    this.generateCode = codeGenerator(0)
  }

  initState() {
    return {
      list: [],
      totalItems: 0,
      limit: 10,
      currentPage: 1
    }
  }

  async load() {
    const {limit, currentPage} = this.getState()
    
    const skip=(currentPage - 1) * limit
    console.log('skip:', skip);
    const response = await fetch(`api/v1/articles?limit=${limit}&skip=${skip}&fields=items(_id, title, price),count`);
    // const response = await fetch(`api/v1/articles?limit=*`);
    const json = await response.json();
    this.setState({
      ...this.getState(),
      list: json.result.items,
      totalItems:json.result.count
    }, 'Загружены товары из АПИ');
  }

  setCurrentPage(currentPage){
    this.setState({
      ...this.getState(),
      currentPage
    }, 'Изменили страницу');
  }
}

export default Catalog;
