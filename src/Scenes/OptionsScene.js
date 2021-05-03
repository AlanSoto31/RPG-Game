import 'phaser';
import Button from '../Objects/Button';
import config from '../Config/config';

export default class OptionsScene extends Phaser.Scene {
  constructor () {
    super('Options');
  }

  create () {
    this.model = this.sys.game.globals.model;

    this.text = this.add.text(140, 20, 'Options', { fontSize: 30 });
    this.musicButton = this.add.image(140, 140, 'checkedBox');
    this.musicText = this.add.text(180, 130, 'Enabled', { fontSize: 24 });

    this.musicButton.setInteractive();

    this.musicButton.on('pointerdown', function () {
      this.model.musicOn = !this.model.musicOn;
      this.updateAudio();
    }.bind(this));

    this.menuButton = new Button(this, config.width/2, 230, 'blueButton1', 'blueButton2', 'Menu', 'Title');

    this.updateAudio();
  }

  updateAudio() {
    if (this.model.musicOn === false) {
      this.musicButton.setTexture('box');
      this.sys.game.globals.bgMusic.stop();
      this.model.bgMusicPlaying = false;
    } else {
      this.musicButton.setTexture('checkedBox');
      if (this.model.bgMusicPlaying === false) {
        this.sys.game.globals.bgMusic.play();
        this.model.bgMusicPlaying = true;
      }
    }
  }
};
