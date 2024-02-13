import './index.css';
import { getNodes, getFromLocalStorage, saveToLocalStorage } from './utils';

class MouseToPos {
  #targetEls: NodeList;
  #events: string[];
  #divisionWidth: number;
  #divisionHeight: number;
  #rows: number;
  #cols: number;
  #container: HTMLElement;
  #eventMap: { hover: string; click: string } = {
    hover: 'mousemove',
    click: 'mousedown'
  };
  #hoverDivs: Map<Array<number>, HTMLElement> = new Map();

  constructor(options: {
    targetEls: NodeList;
    events: string[];
    divisionWidth?: number;
    divisionHeight?: number;
    subdivision?: { rows: number; cols: number };
    container?: HTMLElement;
  }) {
    this.#targetEls = options.targetEls;
    this.#events = options.events;
    this.#divisionWidth =
      options.divisionWidth ||
      (this.#targetEls[0] as HTMLElement).getBoundingClientRect().width;
    this.#divisionHeight =
      options.divisionHeight ||
      (this.#targetEls[0] as HTMLElement).getBoundingClientRect().height;
    this.#rows = options.subdivision?.rows || 1;
    this.#cols = options.subdivision?.rows || 1;
    this.#container = options.container || document.body;
    this.#init();
  }

  #init() {
    if (typeof this.#events === 'undefined' || !Array.isArray(this.#events)) {
      throw new TypeError(
        'You must provide an event list with at least one event.'
      );
    }
    if (
      typeof this.#targetEls === 'undefined' ||
      !Array.isArray(this.#events)
    ) {
      throw new TypeError(
        'You must provide an element list with at least one element.'
      );
    }

    this.#events.forEach((event: 'hover' | 'click') => {
      const mouseEvent = this.#eventMap[event];
      this.#targetEls.forEach((element: HTMLElement) => {
        element.addEventListener(mouseEvent, (e: MouseEvent) => {
          this[`${event}Handler`](e as MouseEvent, element);
        });
      });
    });

    this.#container.addEventListener('mousemove', e => {
      const hoverDivs = getNodes('.hover-div');
      for (let i = 0; i < hoverDivs.length; i++) {
        const div = hoverDivs[i] as HTMLElement;
        if (
          e.y < div.getBoundingClientRect().top ||
          e.y > div.getBoundingClientRect().bottom ||
          e.x < div.getBoundingClientRect().left ||
          e.x > div.getBoundingClientRect().right
        ) {
          div.remove();
        }
      }
    });
  }

  hoverHandler = (e: MouseEvent, element: HTMLElement) => {
    const { x, y, width, height } = this.getXY(e);
    this.drawRect({ x, y, width, height }, element);
  };

  clickHandler = (e: MouseEvent) => {
    console.log('click');
  };

  getXY = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const { top, left } = (e.target as HTMLElement).getBoundingClientRect();
    const x =
      Math.floor((clientX - left) / (this.#divisionWidth / this.#cols)) *
      (this.#divisionWidth / this.#cols);
    const y =
      Math.floor((clientY - top) / (this.#divisionHeight / this.#rows)) *
      (this.#divisionHeight / this.#rows);
    return {
      x,
      y,
      width: this.#divisionWidth / this.#cols,
      height: this.#divisionHeight / this.#rows
    };
  };

  drawRect = (
    XY: { x: number; y: number; width: number; height: number },
    parent: HTMLElement
  ) => {
    if (parent.children.length >= this.#cols * this.#rows) {
      return;
    }
    const hoverDiv = document.createElement('div');
    hoverDiv.classList.add('hover-div');
    hoverDiv.style.left = `${XY.x}px`;
    hoverDiv.style.top = `${XY.y}px`;
    hoverDiv.style.width = `${XY.width}px`;
    hoverDiv.style.height = `${XY.height}px`;
    parent.appendChild(hoverDiv);
  };
}

export default MouseToPos;
