import MouseToPos from '../lib';
import { event, events } from '../lib/@types';
import { getNodes } from '../lib/utils';

// Init scaffolding
import scaffolding from './scaffolding';
scaffolding();

// const container = document.querySelector('.divisions') as HTMLElement;
// const rows = 48;
// const cols = 21;
// const hoverWidth = container.getBoundingClientRect().width / cols;
// const hoverHeight = container.getBoundingClientRect().height / rows;
// const subdivision = { rows: rows, cols: cols };
// const hoverDivs: HTMLElement[] = [];

// const options = {
//   container,
//   events: ['hover', 'click'] as events,
//   subdivision: subdivision,
//   outputFunction: (x: number, y: number, event: event) => {
//     // Draw a hover rectangle based on the x and y coordinates, and remove
//     // drawn rectangles if x and y are different from the previous x and y.
//     if (event === 'hover') {
//       hoverDivs.forEach(div => div.remove());
//       hoverDivs.length = 0;
//       const div = document.createElement('div');
//       div.style.position = 'absolute';
//       div.style.top = `${y}px`;
//       div.style.left = `${x}px`;
//       div.style.width = `${hoverWidth}px`;
//       div.style.height = `${hoverHeight}px`;
//       div.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
//       container.appendChild(div);
//       hoverDivs.push(div);
//     }
//   }
// };

// const mouseToPos = new MouseToPos(options);

const hoverDivs: HTMLElement[] = [];
const containers = document.querySelectorAll('.week .day').forEach((container: HTMLElement) => {
  const rows = 2;
  const cols = 3;
  const hoverWidth = container.getBoundingClientRect().width / cols;
  const hoverHeight = container.getBoundingClientRect().height / rows;
  const subdivision = { rows: rows, cols: cols };

  const options = {
    container,
    events: ['hover', 'click'] as events,
    subdivision: subdivision,
    outputFunction: (x: number, y: number, event: event) => {
      // Draw a hover rectangle based on the x and y coordinates, and remove
      // drawn rectangles if x and y are different from the previous x and y.
      if (event === 'hover') {
        hoverDivs.forEach(div => div.remove());
        hoverDivs.length = 0;
        const div = document.createElement('div');
        div.style.position = 'absolute';
        div.style.top = `${y}px`;
        div.style.left = `${x}px`;
        div.style.width = `${hoverWidth}px`;
        div.style.height = `${hoverHeight}px`;
        div.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        container.appendChild(div);
        hoverDivs.push(div);
      }
    }
  };

  const mouseToPos = new MouseToPos(options);
});
