// Render the game scores
export const render = (data) => {
  const scoreContainer = document.querySelector('.score-list-group');
  let domUI = '';
  if (data.length > 0) {
    data.forEach((item) => {
      domUI += `<li class='score-item'>
      ${item.user}: <span class="badge-score">${item.score}</span>
      </li>`;
    });
  } else {
    domUI = '<p class=\'no-item\'>There is no score to display! Please add a new one</p>';
  }
  // append scores in scoreContainer
  scoreContainer.innerHTML = domUI;
};

// Add score
export const onAddscore = async (url, data) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const result = await res.json();
  return result;
};

// fetch all game scores
export const onFetchData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  render(data.result);
};
