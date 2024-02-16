export const getNodes = (selector: string): NodeList => {
  return document.querySelectorAll(selector);
};

export const saveToLocalStorage = (key: string, value: string): undefined => {
  localStorage.setItem(key, value);
};

export const getFromLocalStorage = (key: string): string | null => {
  try {
    return localStorage.getItem(key);
  } catch (e) {
    return null;
  }
};

export const hash = (input: number[]): string => {
  return input.reduce((acc, curr) => acc + curr.toString(), '');
};

export const unHash = (input: string): number[] => {
  return input.split('').map((char: string) => parseInt(char));
};
