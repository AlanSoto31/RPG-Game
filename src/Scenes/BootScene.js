import 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor () {
    super('Boot');
  }

  preload () {
    this.load.image('logo', 'assets/nautilus_logo.png');
    this.load.image('tiles', 'assets/map/spritesheet.png');
        
    // map in json format
    this.load.tilemapTiledJSON('map', 'assets/map/map.json');
    
    // enemies
    this.load.image("octopus", "assets/octopus.png");
    this.load.image("jellyfish", "assets/jellyfish.png");
    
    // our two characters
    this.load.spritesheet('player', 'assets/manatee-african.png', { frameWidth: 32, frameHeight: 32 });
  }

  create () {
    this.scene.start('Preloader');
  }
};