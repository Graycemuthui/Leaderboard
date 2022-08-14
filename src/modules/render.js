// Create a function that renders the score board
const scoreBoard = document.getElementById('scoreboard');

const renderScoreBoard = (scores) => {
  let template = '';
  scores.forEach((score, i) => {
    template += `
    <div class="${
  i % 2 === 0 ? 'blue-container' : 'white-container'
}" id="score-board"-${i}">
    <p class="title-descr"> ${score.user}: ${score.score} </p></div>`;
  });
  scoreBoard.innerHTML = template;
};
export default renderScoreBoard;
