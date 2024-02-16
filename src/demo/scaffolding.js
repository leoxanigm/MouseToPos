export default function scaffolding() {
  const body = document.querySelector('body');

  // scaffoldingWeek(body);
  scaffoldingMonth(body);
}

function scaffoldingMonth(body) {
  const calHeader = document.createElement('div');
  calHeader.className = 'calendar-header';

  for (let i = 0; i < 7; i++) {
    const col = document.createElement('div');
    col.className = 'col day';
    col.textContent = 'col' + i;
    calHeader.appendChild(col);
  }

  body.appendChild(calHeader);

  const calBody = document.createElement('div');
  calBody.className = 'calendar-body';

  for (let i = 0; i < 6; i++) {
    const row = document.createElement('div');
    row.className = 'row week';
    for (let j = 0; j < 7; j++) {
      const day = document.createElement('div');
      day.className = 'col day';
      day.textContent = 'day ' + i + j;
      row.appendChild(day);
    }
    calBody.appendChild(row);
  }

  body.appendChild(calBody);
}

function scaffoldingWeek(body) {
  const calHeader = document.createElement('div');
  calHeader.className = 'calendar-header';

  for (let i = 0; i <= 7; i++) {
    const col = document.createElement('div');
    if (i === 0) {
      col.className = 'col col-first';
    } else {
      col.className = 'col day';
      col.textContent = 'col' + i;
    }
    calHeader.appendChild(col);
  }

  body.appendChild(calHeader);

  const calBody = document.createElement('div');
  calBody.className = 'calendar-body';
  const hourContainer = document.createElement('div');
  hourContainer.className = 'hours';

  for (let i = 0; i < 24; i++) {
    const hour = document.createElement('div');
    hour.className = 'row hour';
    hour.textContent = 'hour ' + i;
    hourContainer.appendChild(hour);
  }

  calBody.appendChild(hourContainer);

  const divisionsContainer = document.createElement('div');
  divisionsContainer.className = 'divisions';
  calBody.appendChild(divisionsContainer);

  body.appendChild(calBody);
}
