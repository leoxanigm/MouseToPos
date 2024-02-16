import './index.css';
import {
  getNodes,
  getFromLocalStorage,
  saveToLocalStorage,
  hash,
  unHash
} from './utils';
import PosEvent from './events';
import { eventMap, events, offsets, outputFunction, subdivision } from './@types';

class MouseToPos extends PosEvent {
  #container: HTMLElement;
  #events: events;
  #rows: number;
  #cols: number;
  #offsetTop: number;
  #offsetLeft: number;
  #offsetBottom: number;
  #offsetRight: number;
  #eventMap: eventMap = {
    hover: 'mousemove',
    click: 'mousedown'
  };
  #posEvent: PosEvent;
  #outputFunction: outputFunction;

  constructor(options: {
    container: HTMLElement;
    events: events;
    outputFunction: outputFunction;
    subdivision?: subdivision;
    offsets?: offsets
  }) {
    super();
    this.#container = options.container;
    this.#events = options.events;
    this.#outputFunction = options.outputFunction;
    this.#rows = options.subdivision?.rows || 1;
    this.#cols = options.subdivision?.cols || 1;
    this.#offsetTop = options.offsets?.top || 0;
    this.#offsetLeft = options.offsets?.left || 0;
    this.#offsetBottom = options.offsets?.bottom || 0;
    this.#offsetRight = options.offsets?.right || 0;
    this.#posEvent = new PosEvent();
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

    this.#events.forEach((event: 'hover' | 'click') => {
      const mouseEvent = this.#eventMap[event];
      this.#container.addEventListener(mouseEvent, (e: MouseEvent) => {
        this.#eventHandler(e as MouseEvent, this.#container);
      });
    });
  }

  #eventHandler = (e: MouseEvent, element: HTMLElement) => {
    e.stopPropagation();
    const { x, y, width, height } = this.getXY(e, element);
    this.fire(x, y);
  };

  getXY = (e: MouseEvent, element: HTMLElement) => {
    const { clientX, clientY } = e;
    const { top, left, width, height } = element.getBoundingClientRect();

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

  // drawRect = (
  //   {
  //     x,
  //     y,
  //     width,
  //     height
  //   }: { x: number; y: number; width: number; height: number },
  //   parent: HTMLElement
  // ) => {
  //   const hoverDiv = document.createElement('div');
  //   hoverDiv.classList.add('hover-div');
  //   hoverDiv.style.left = `${x}px`;
  //   hoverDiv.style.top = `${y}px`;
  //   hoverDiv.style.width = `${width}px`;
  //   hoverDiv.style.height = `${height}px`;
  //   parent.appendChild(hoverDiv);
  // };

  // posToData = ({ x, y }: { x: number; y: number }) => {
  //   console.log(x, y);
  // };
}

export default MouseToPos;
