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
  const msg = document.querySelector('.message');
  try {
    msg.classList.remove('error');
    msg.innerHTML = '';
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    // handing error
    if (!res.ok && res.status >= 400) {
      throw new Error(`${res.status} ${res.statusText}`);
    } else if (!res.ok) {
      return Promise.reject(new Error(`${res.status} ${res.statusText}`));
    }

    const result = await res.json();
    msg.innerHTML = result.result;
    msg.classList.add('success');
    setTimeout(() => {
      msg.innerHTML = '';
      msg.classList.remove('success');
    }, 3000);
    return result;
  } catch (err) {
    // catch the error
    msg.innerHTML = err;
    msg.classList.add('error');
    setTimeout(() => {
      msg.innerHTML = '';
      msg.classList.remove('error');
    }, 3000);
    return err;
  }
};

// fetch all game scores
export const onFetchData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  render(data.result);
};
