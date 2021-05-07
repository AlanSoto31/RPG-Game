import 'jest-canvas-mock';
import Phaser from 'phaser';
import 'regenerator-runtime';
import GameOverScene from '../Scenes/GameOverScene';

test('GameOver-Scene is an instance of Scene', () => {
  expect(GameOverScene.prototype instanceof Phaser.Scene).toBe(true);
});