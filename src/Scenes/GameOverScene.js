import 'phaser';
import ScoreScene from "./ScoreScene";

export default class GameOverScene extends Phaser.Scene {
  constructor () {
    super('GameOverScene');
  }

  create () {
    this.model = this.sys.game.globals.model;
    this.text = this.add.text(140, 20, 'Game Over', { fontSize: 30 });
    this.text = this.add.text(140, 40, this.model.score, { fontSize: 30 });

    const result = ScoreScene.getScores()
    result.then((data) => {
      data.sort((a, b) => {
        return b.score - a.score;
      });
      console.log(data);
      this.text = this.add.text(20, 80, data[0].user, { fontSize: 30 });
      this.text = this.add.text(200, 80, data[0].score, { fontSize: 30 });

      this.text = this.add.text(20, 100, data[1].user, { fontSize: 30 });
      this.text = this.add.text(200, 100, data[1].score, { fontSize: 30 });

      this.text = this.add.text(20, 120, data[2].user, { fontSize: 30 });
      this.text = this.add.text(200, 120, data[2].score, { fontSize: 30 });
    });


  }
}