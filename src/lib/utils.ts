const getNodes = (selector: string): NodeList => {
  return document.querySelectorAll(selector);
};

const saveToLocalStorage = (key: string, value: string): undefined => {
  localStorage.setItem(key, value);
};

const getFromLocalStorage = (key: string): string | null => {
  try {
    return localStorage.getItem(key);
  } catch (e) {
    return null;
  }
};

export { getNodes, saveToLocalStorage, getFromLocalStorage };
