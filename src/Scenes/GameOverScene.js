import 'phaser';

export default class GameOverScene extends Phaser.Scene {
  constructor () {
    super('GameOverScene');
  }

  create () {
    this.model = this.sys.game.globals.model;
    this.text = this.add.text(140, 20, 'Game Over', { fontSize: 30 });
    this.text = this.add.text(140, 40, this.model.score, { fontSize: 30 });
  }
}