import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('logo', 'assets/nautilus_logo.png');
    this.load.image('tiles', 'assets/map/spritesheet.png');

    this.load.tilemapTiledJSON('map', 'assets/map/map.json');

    this.load.image('octopus', 'assets/octopus.png');
    this.load.image('jellyfish', 'assets/jellyfish.png');

    this.load.spritesheet('player', 'assets/manatee-african.png', { frameWidth: 32, frameHeight: 32 });
  }

  create() {
    this.scene.start('Preloader');
  }
}
