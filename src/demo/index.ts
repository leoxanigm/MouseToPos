import MouseToPos from '../lib';
import { event, events } from '../lib/@types';
import { getNodes } from '../lib/utils';

// Init scaffolding
import scaffolding from './scaffolding';
scaffolding();

// const rows = getNodes('.row-container');
const container = document.querySelector('.row-container') as HTMLElement;
// const container = document.body as HTMLElement;
const options = {
  container,
  events: ['hover', 'click'] as events,
  subdivision: { rows: 24, cols: 1 },
  outputFunction: (x: number, y: number, event: event) => {
    console.log(x, y);
  }
};

const hoverDivs: HTMLElement[] = [];
const mouseToPos = new MouseToPos(options);
mouseToPos.addEventListener('posChange', (e: CustomEvent) => {
  console.log(e.detail);
});
