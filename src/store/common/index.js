import StoreModule from "../module";

class Common extends StoreModule {
  initState() {
    return {
      isTranslation: false,
    };
  }

  setIsTranslation() {
    this.setState(
      {
        ...this.getState(),
        isTranslation: !this.getState().isTranslation,
      },
      "Изменение языка"
    );
  }
}

export default Common;
