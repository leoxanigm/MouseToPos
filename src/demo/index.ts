import MouseToPos from '../lib';
import { getNodes } from '../lib/utils';

// Init scaffolding
import scaffolding from './scaffolding';
scaffolding();

const rows = document.querySelectorAll('.row-content');
const mouseToPos = new MouseToPos({
  targetEls: rows,
  events: ['hover', 'click'],
  divisionWidth: (getNodes('.col')[0] as HTMLElement).getBoundingClientRect()
    .width,
  subdivision: { rows: 1, cols: 1 },
  container: getNodes('.row-container')[0] as HTMLElement
});
