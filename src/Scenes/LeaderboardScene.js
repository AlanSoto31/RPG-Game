import Phaser from 'phaser';
import Button from '../Objects/Button';
import config from '../Config/config';
import ScoreScene from './ScoreScene';

export default class LeaderboardScene extends Phaser.Scene {
  constructor() {
    super('LeaderboardScene');
  }

  create() {
    this.model = this.sys.game.globals.model;

    const result = ScoreScene.getScores();
    this.text = this.add.text(80, 20, 'Highest Scores', { fontSize: 30, fill: '#ffff00' });
    result.then((data) => {
      data.sort((a, b) => b.score - a.score);
      this.text = this.add.text(20, 60, `${data[0].user}:`, { fontSize: 30 });
      this.text = this.add.text(300, 60, data[0].score, { fontSize: 30 });

      this.text = this.add.text(20, 90, `${data[1].user}:`, { fontSize: 30 });
      this.text = this.add.text(300, 90, data[1].score, { fontSize: 30 });

      this.text = this.add.text(20, 120, `${data[2].user}:`, { fontSize: 30 });
      this.text = this.add.text(300, 120, data[2].score, { fontSize: 30 });

      this.text = this.add.text(20, 150, `${data[3].user}:`, { fontSize: 30 });
      this.text = this.add.text(300, 150, data[3].score, { fontSize: 30 });

      this.text = this.add.text(20, 180, `${data[4].user}:`, { fontSize: 30 });
      this.text = this.add.text(300, 180, data[4].score, { fontSize: 30 });
    });

    this.menuButton = new Button(this, config.width / 2, 250, 'blueButton1', 'blueButton2', 'Menu', 'Title');
  }
}