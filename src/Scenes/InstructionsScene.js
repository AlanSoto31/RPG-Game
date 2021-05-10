import Phaser from 'phaser';
import Button from '../Objects/Button';
import config from '../Config/config';

export default class InstructionsScene extends Phaser.Scene {
  constructor() {
    super('InstructionsScene');
  }

  create() {
    this.text = this.add.text(90, 5, 'How to play', { fontSize: 30, fill: '#ffff00' });

    this.text = this.add.text(10, 35, 'Collect the major amount of points before die, you get 50 points after winning a battle, game is over if you loose.', { fontSize: 14, wordWrap: { width: 400 } });

    this.text = this.add.text(10, 85, '* Moving around the world with the arrow-keys.', { fontSize: 14, wordWrap: { width: 400 } });

    this.text = this.add.text(10, 100, '* A battle starts when you find an enemy.', { fontSize: 14, wordWrap: { width: 400 } });

    this.text = this.add.text(20, 120, '- The word Attack will be yellow when it is your turn to attack, then press the spacebar/left arrow once to be able to select an enemy.', { fontSize: 14, wordWrap: { width: 390 } });

    this.text = this.add.text(20, 180, '- Select an enemy with up-arrow/down-arrow.', { fontSize: 14 });

    this.text = this.add.text(20, 195, '- Attack pressing space bar/left arrow.', { fontSize: 14 });

    this.text = this.add.text(20, 210, '- Wait enemy´s attack and attack it again.', { fontSize: 14 });

    this.menuButton = new Button(this, config.width / 2, 250, 'blueButton1', 'blueButton2', 'Menu', 'Title');
  }
}