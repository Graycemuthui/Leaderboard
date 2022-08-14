import renderScoreBoard from './render';

const user = document.getElementById('user');
const score = document.getElementById('score');

export default class Api {
  static addScore = async () => {
    await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/SrhSeNg2rfT09fUzllGO/scores/ ',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: user.value,
          score: score.value,
        }),
      },
    );
    user.value = '';
    score.value = '';
  };

  static getScores = async () => {
    const result = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/WiVBhQ7VdpGwGAAkg1BV/scores/',
    );
    const data = await result.json();
    renderScoreBoard(data.result);
  };
}
