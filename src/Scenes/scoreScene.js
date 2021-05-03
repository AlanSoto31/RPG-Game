export default class scoreScene {

    static async getScore() {

      const gameName = { "name": "Manatee Game 1" }
      const name = JSON.stringify(gameName);
      const newUrl = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/";
      const res = await fetch(newUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: name,
      });

      const res2 = await res.json();
      console.log(res2);
    }
  }

  