import Phaser from 'phaser';
import ScoreScene from './ScoreScene';
import Button from '../Objects/Button';
import config from '../Config/config';

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOverScene');
  }

  create() {
    this.model = this.sys.game.globals.model;
    this.text = this.add.text(110, 5, 'Game Over', { fontSize: 30 });

    this.text = this.add.text(20, 40, 'Your score:', { fontSize: 30, fill: '#ffff00' });
    this.text = this.add.text(300, 40, this.model.score, { fontSize: 30, fill: '#ffff00' });

    this.text = this.add.text(60, 90, 'Highest scores', { fontSize: 30 });

    const result = ScoreScene.getScores();
    result.then((data) => {
      data.sort((a, b) => b.score - a.score);
      this.text = this.add.text(20, 130, `${data[0].user}:`, { fontSize: 30 });
      this.text = this.add.text(300, 130, data[0].score, { fontSize: 30 });

      this.text = this.add.text(20, 160, `${data[1].user}:`, { fontSize: 30 });
      this.text = this.add.text(300, 160, data[1].score, { fontSize: 30 });

      this.text = this.add.text(20, 190, `${data[2].user}:`, { fontSize: 30 });
      this.text = this.add.text(300, 190, data[2].score, { fontSize: 30 });
    });

    this.menuButton = new Button(this, config.width / 2, 250, 'blueButton1', 'blueButton2', 'Menu', 'Title');
  }
}