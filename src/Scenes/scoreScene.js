export default class ScoreScene  {

    static async setScore(name, score) {
      const playerInfo = { "user": `${name}`, "score": `${score}` }
      const postInfo = JSON.stringify(playerInfo);
      const newUrl = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/kK1m8vJcHZSsFWUvLAYC/scores/";
      const res = await fetch(newUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: postInfo,
      });
      const res2 = await res.json(); 
      console.log(res2);  
    }

    static async getScore() {

      const newUrl = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/kK1m8vJcHZSsFWUvLAYC/scores/";
      const res = await fetch(newUrl);
      const res2 = await res.json(); 
      console.log(res2);
    }
  }