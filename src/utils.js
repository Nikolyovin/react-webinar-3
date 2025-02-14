const propNames = new Set(['id', 'className', 'textContent', 'onclick']);

/**
 * Создание элемента со свойствами и вложенными элементами
 * @param name {String} Название HTML тега
 * @param props {Object} Свойства и атрибуты элемента
 * @param children {...Node} Вложенные элементы
 * @returns {HTMLElement}
 */
export function createElement(name, props = {}, ...children) {
  const element = document.createElement(name);

  // Назначение свойств и атрибутов
  for (const name of Object.keys(props)) {
    if (propNames.has(name)) {
      element[name] = props[name];
    } else {
      element.setAttribute(name, props[name]);
    }
  }

  // Вставка вложенных элементов
  for (const child of children) {
    element.append(child);
  }

  return element;
}

export const getWordForm = (number) => {
  const lastDigit = number % 10;
  const secondToLastDigit = Math.floor((number % 100) / 10);

  if (secondToLastDigit === 1) {
    return 'раз';
  } else if (lastDigit === 1) {
    return 'раз';
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    return 'раза';
  } else {
    return 'раз';
  }
}

export const generateCode = ()  => Math.floor(Math.random() * 1000)
