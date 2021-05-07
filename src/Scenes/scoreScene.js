export default class ScoreScene {
  static async setGameName() {
    const playerInfo = { name: 'Manatee Game' };
    const postInfo = JSON.stringify(playerInfo);
    const newUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
    const res = await fetch(newUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: postInfo,
    });
    await res.json();
  }

  static async setScore(name, score) {
    const playerInfo = { user: `${name}`, score };
    const postInfo = JSON.stringify(playerInfo);
    const newUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/DPUENoC03akrbwf7x3yH/scores/';
    const res = await fetch(newUrl, {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: postInfo,
    });
    const res2 = await res.json();
    return res2;
  }

  static async getScores() {
    const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/DPUENoC03akrbwf7x3yH/scores/';
    const res = await fetch(url);
    const res2 = await res.json();
    return res2.result;
  }
}