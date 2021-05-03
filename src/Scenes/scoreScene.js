export default class scoreScene {

    static async getScore() {

      const setScore = { "user": "John Doe", "score": 42 }
    
      const score = JSON.stringify(setScore);
      const newUrl = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/kK1m8vJcHZSsFWUvLAYC/scores/";
      const res = await fetch(newUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: score,
      }); 

/*       const newUrl = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/kK1m8vJcHZSsFWUvLAYC/scores/";
      const res = await fetch(newUrl);
      const res2 = await res.json(); */

      console.log(res2);
    }
  }