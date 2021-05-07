import 'jest-canvas-mock';
import Phaser from 'phaser';
import WorldScene from '../Scenes/WorldScene';

test('World-Scene is an instance of Scene', () => {
  expect(WorldScene.prototype instanceof Phaser.Scene).toBe(true);
});