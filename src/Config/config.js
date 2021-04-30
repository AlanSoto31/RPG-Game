import 'phaser';

export default {
  type: Phaser.AUTO,
  parent: 'content',
  width: 800,
  height: 550,
  pixelArt: true,
  physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 0 },
          debug: false // set to true to view zones
      }
  },
};
