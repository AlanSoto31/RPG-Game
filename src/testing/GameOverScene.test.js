/* eslint-disable no-undef */
import 'jest-canvas-mock';
import 'phaser';
import GameOverScene from '../Scenes/GameOverScene';

test('GameOver-Scene is an instance of Scene', () => {
  expect(GameOverScene.prototype instanceof Phaser.Scene).toBe(true);
});
/* eslint-enable no-undef */