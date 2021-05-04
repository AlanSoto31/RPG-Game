import 'phaser';

export default {
  type: Phaser.AUTO,
  parent: 'content',
  width: 400,
  height: 275,
  zoom: 2,
  pixelArt: true,
  physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 0 },
          debug: false // set to true to view zones
      }
  },
};
