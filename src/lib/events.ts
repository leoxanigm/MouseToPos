export default class PosEvent extends EventTarget {
  constructor(public x: number = 0, public y: number = 0) {
    super();
  }

  fire(x: number, y: number) {
    if (x !== this.x && y !== this.y) {
      this.dispatchEvent(new CustomEvent('posChange', { detail: { x, y } }));
      this.x = x;
      this.y = y;
    }
  }
}
