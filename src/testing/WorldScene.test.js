import 'jest-canvas-mock';
import Phaser from 'phaser';
import WorldScene from '../Scenes/WorldScene';

test('World-Scene is an instance of Scene', () => {
  expect(WorldScene.prototype instanceof Phaser.Scene).toBe(true);
});

test('World-Scen is not an instance of Text', () => {
  expect(WorldScene.prototype instanceof Phaser.GameObjects.Text).not.toBe(true);
});