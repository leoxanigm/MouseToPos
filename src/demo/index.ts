import MouseToPos from '../lib';

// Init scaffolding
import scaffolding from './scaffolding';
scaffolding();

const rows = document.querySelectorAll('.row-content');
const mouseToPos = new MouseToPos({ targetEls: rows, events: ['hover', 'click'] });
