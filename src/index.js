import './style.css';
import { onAddscore, render } from './modules/manage-leaderboard.js';

// Temporary data
let data = [
  {
    id: 1,
    name: "Raihan",
    score: 100
  },
  {
    id: 2,
    name: "Raihan",
    score: 75
  },
  {
    id: 3,
    name: "Raihan",
    score: 50
  },
  {
    id: 4,
    name: "Raihan",
    score: 20
  },
  {
    id: 5,
    name: "Raihan",
    score: 10
  }
];

// ll the score list will append here. 
const scoreContainer = document.querySelector('.score-list-group');

// on submit add score
const addBookForm = document.getElementById('add-score');
addBookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  onAddscore();

  // next level code will start form here
})

// onload fetch the score.
window.onload = () => {
  // I will face the scrore form here.
  render(data, scoreContainer);
}