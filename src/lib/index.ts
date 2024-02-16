import './index.css';
import {
  getNodes,
  getFromLocalStorage,
  saveToLocalStorage,
  hash,
  unHash
} from './utils';
import { event, eventMap, events, outputFunction, subdivision } from './@types';

class MouseToPos {
  #container: HTMLElement;
  #events: events;
  #rows: number;
  #cols: number;
  #eventMap: eventMap = {
    hover: 'mousemove',
    click: 'mousedown'
  };
  #outputFunction: outputFunction;
  #greedy: boolean;
  #prevX: number;
  #prevY: number;

  constructor(options: {
    container: HTMLElement;
    events: events;
    outputFunction: outputFunction;
    subdivision?: subdivision;
    greedy?: boolean | false;
  }) {
    this.#container = options.container;
    this.#events = options.events;
    this.#outputFunction = options.outputFunction;
    this.#rows = options.subdivision?.rows || 1;
    this.#cols = options.subdivision?.cols || 1;
    this.#greedy = options.greedy || false;
    this.#init();
  }

  #init() {
    if (typeof this.#events === 'undefined' || !Array.isArray(this.#events)) {
      throw new TypeError(
        'You must provide an event list with at least one event.'
      );
    }
    if (!(this.#container instanceof HTMLElement)) {
      throw new TypeError('You must provide a container element.');
    }

    this.#events.forEach((event: event) => {
      const mouseEvent = this.#eventMap[event];
      this.#container.addEventListener(mouseEvent, (e: MouseEvent) => {
        this.#eventHandler(e as MouseEvent, this.#container, event);
      });
    });
  }

  #eventHandler = (e: MouseEvent, element: HTMLElement, event: event) => {
    e.stopPropagation();
    const { x, y, width, height } = this.getXY(e, element);
    if (this.#greedy) {
      this.#outputFunction(x, y, event);
    } else if (x !== this.#prevX || y !== this.#prevY) {
      this.#outputFunction(x, y, event);
      this.#prevX = x;
      this.#prevY = y;
    }
    return;
  };

  getXY = (e: MouseEvent, element: HTMLElement) => {
    const { clientX, clientY } = e;
    let { top, left, width, height } = element.getBoundingClientRect();

    const divisionWidth = width / this.#cols;
    const divisionHeight = height / this.#rows;

    const x = Math.floor((clientX - left) / divisionWidth) * divisionWidth;
    const y = Math.floor((clientY - top) / divisionHeight) * divisionHeight;

    return {
      x,
      y,
      width: divisionWidth,
      height: divisionHeight
    };
  };
}

export default MouseToPos;
