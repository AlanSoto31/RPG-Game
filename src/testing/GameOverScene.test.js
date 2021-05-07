import 'jest-canvas-mock';
import Phaser from 'phaser';
import 'regenerator-runtime';
import GameOverScene from '../Scenes/GameOverScene';

test('GameOver-Scene is an instance of Scene', () => {
  expect(GameOverScene.prototype instanceof Phaser.Scene).toBe(true);
});

test('GameOver-Scene is not an instance of Text', () => {
  expect(GameOverScene.prototype instanceof Phaser.GameObjects.Text).not.toBe(true);
});