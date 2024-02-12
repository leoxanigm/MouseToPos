import './index.css';

class MouseToPos {
  #targetEls: NodeList;
  #events: string[];
  #rows: number;
  #cols: number;
  #eventMap: { hover: string; click: string } = {
    hover: 'mousemove',
    click: 'mousedown'
  };

  constructor(options: {
    targetEls: NodeList;
    events: string[];
    subdivision?: { rows: number; cols: number };
  }) {
    this.#targetEls = options.targetEls;
    this.#events = options.events;
    this.#rows = options.subdivision?.rows || 1;
    this.#cols = options.subdivision?.rows || 1;
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
      this.#targetEls.forEach(element => {
        element.addEventListener(mouseEvent, e => {
          this[`${event}Handler`](e);
        });
      });
    });
  }

  hoverHandler = (e: Event) => {
    console.log('hover');
  };

  clickHandler = (e: Event) => {
    console.log('click');
  };
}

export default MouseToPos;
