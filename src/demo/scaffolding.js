export default function scaffolding() {
  const body = document.querySelector('body');

  const colsContainer = document.createElement('div');
  colsContainer.className = 'col-container';

  for (let i = 0; i < 7; i++) {
    const col = document.createElement('div');
    if (i === 0) {
      col.className = 'col col-first';
    } else {
      col.className = 'col';
      col.textContent = 'col' + i;
    }
    colsContainer.appendChild(col);
  }

  body.appendChild(colsContainer);

  const rowsContainer = document.createElement('div');
  rowsContainer.className = 'row-container';

  for (let i = 0; i < 24; i++) {
    const row = document.createElement('div');
    row.className = 'row';
    const rowLabel = document.createElement('div');
    rowLabel.className = 'row-label';
    rowLabel.textContent = 'row' + i;
    const rowContent = document.createElement('div');
    rowContent.className = 'row-content';
    row.appendChild(rowLabel);
    row.appendChild(rowContent);

    rowsContainer.appendChild(row);
  }

  body.appendChild(rowsContainer);
}
