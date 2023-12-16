import StoreModule from "../module";

class CategoriesState extends StoreModule {
  /**
   * Начальное состояние
   * @return {Object}
   */
  initState() {
    return {
      categories: [],
    };
  }

  async getCategories() {
    const response = await fetch(
      `/api/v1/categories?fields=_id,title,parent(_id)&limit=*`
    );
    const json = await response.json();

    function flattenCategories(categories, parentId = null, depth = 0) {
      const result = [];

      categories.map((category) => {
        if (
          (parentId === null && category.parent === null) ||
          (category.parent && category.parent._id === parentId)
        ) {
          const indentedTitle = "- ".repeat(depth) + category.title;
          result.push({ ...category, title: indentedTitle });
          // Рекурсивно вызываем для дочерних категорий
          result.push(
            ...flattenCategories(categories, category._id, depth + 1)
          );
        }
      });

      return result;
    }
    const sortedCategories = flattenCategories(json.result.items);

    this.setState(
      {
        ...this.getState(),
        categories: sortedCategories,
      },
      "Загрузили категории из АПИ"
    );
  }
}

export default CategoriesState;
