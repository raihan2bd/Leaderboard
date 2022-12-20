export const onAddscore = (data) => data;

export const render = (data, domContainer) => {
  let domUI = '';
  if (data.length > 0) {
    data.forEach((item) => {
      domUI += `<li class='score-item' id='${item.id}'>
      ${item.name}: <span class="badge-score">${item.score}</span>
      </li>`;
    });
  } else {
    domUI = '<p class=\'no-item\'>There is not score to display</p>';
  }
  domContainer.innerHTML = domUI;
};