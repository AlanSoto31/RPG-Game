/* eslint-disable no-undef */
import 'jest-canvas-mock';
import 'phaser';
import WorldScene from '../Scenes/WorldScene';

test('World-Scene is an instance of Scene', () => {
  expect(WorldScene.prototype instanceof Phaser.Scene).toBe(true);
});
/* eslint-enable no-undef */