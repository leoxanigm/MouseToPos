declare enum event {
  hover = 'hover',
  click = 'click'
}
export type events = Array<event>;

export type eventMap = {
  [Key in event]: MouseEvent['type'];
};

export type subdivision = {
  rows?: number;
  cols?: number;
};

export type outputFunction = (x: number, y: number, event: event) => any | void;