import './style.css';
import { onAddscore, onFetchData } from './modules/manage-leaderboard.js';

// My Game Id;
const gameId = 'kz7kFHbI0ph5AfvprVSS';

const apiEndpoint = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;

// on submit add score
const addScoreForm = document.getElementById('add-score');
addScoreForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = document.getElementById('name');
  const score = document.getElementById('score');
  const btn = document.getElementById('submit-score');
  btn.disabled = true;
  const result = onAddscore(apiEndpoint, { user: user.value, score: score.value });
  if (result) {
    user.value = '';
    score.value = '';
    btn.disabled = false;
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