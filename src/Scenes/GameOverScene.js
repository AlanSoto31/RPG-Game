import 'phaser';
import ScoreScene from "./ScoreScene";

export default class GameOverScene extends Phaser.Scene {
  constructor () {
    super('GameOverScene');
  }

  create () {
    this.model = this.sys.game.globals.model;
    this.text = this.add.text(110, 20, 'Game Over', { fontSize: 30 });

    this.text = this.add.text(20, 60, "Your score:", { fontSize: 30, fill: '#ffff00' });
    this.text = this.add.text(300, 60, this.model.score, { fontSize: 30, fill: '#ffff00' });

    this.text = this.add.text(60, 120, 'Highest scores', { fontSize: 30 });


    const result = ScoreScene.getScores()
    result.then((data) => {
      data.sort((a, b) => {
        return b.score - a.score;
      });
      console.log(data);
      this.text = this.add.text(20, 160, `${data[0].user}:`, { fontSize: 30 });
      this.text = this.add.text(300, 160, data[0].score, { fontSize: 30 });

      this.text = this.add.text(20, 190, `${data[1].user}:`, { fontSize: 30 });
      this.text = this.add.text(300, 190, data[1].score, { fontSize: 30 });

      this.text = this.add.text(20, 220, `${data[2].user}:`, { fontSize: 30 });
      this.text = this.add.text(300, 220, data[2].score, { fontSize: 30 });
    });


  }
}