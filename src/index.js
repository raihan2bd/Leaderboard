import './style.css';
import { onAddscore, onFetchData } from './modules/manage-leaderboard.js';

// My Game Id;
const gameId = 'aNoosYlYkh5SsqXjNwfI';

const apiEndpoint = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;

// on submit add score
const addScoreForm = document.getElementById('add-score');
addScoreForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = document.getElementById('user');
  const score = document.getElementById('score');
  const btn = document.getElementById('submit-score');
  const msg = document.querySelector('.message');
  if ((user.value.trim().length > 0) && (score.value.trim().length > 0)) {
    msg.classList.remove('error');
    msg.innerHTML = '';
    btn.disabled = true;
    const result = onAddscore(apiEndpoint, { user: user.value, score: score.value });
    if (result) {
      user.value = '';
      score.value = '';
    }
    btn.disabled = false;
  } else {
    msg.innerHTML = 'All the field is required!';
    msg.classList.add('error');
    setTimeout(() => {
      msg.innerHTML = '';
      msg.classList.remove('error');
    }, 3000);
  }
});

// fetch scores on Refresh
document.getElementById('refresh-scores').addEventListener('click', () => {
  onFetchData(apiEndpoint);
});

// onload fetch the score.
window.onload = async () => {
  // fetch score list on the fly
  onFetchData(apiEndpoint);
};