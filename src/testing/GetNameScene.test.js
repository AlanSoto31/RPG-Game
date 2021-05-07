import 'jest-canvas-mock';
import Phaser from 'phaser';
import GetNameScene from '../Scenes/GetNameScene';

test('GetName-Scene is an instance of Scene', () => {
  expect(GetNameScene.prototype instanceof Phaser.Scene).toBe(true);
});

test('GetName-Scene is not an instance of Text', () => {
  expect(GetNameScene.prototype instanceof Phaser.GameObjects.Text).not.toBe(true);
});