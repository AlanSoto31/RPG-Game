import 'jest-canvas-mock';
import Phaser from 'phaser';
import GetNameScene from '../Scenes/GetNameScene';

test('GetName-Scene is an instance of Scene', () => {
  expect(GetNameScene.prototype instanceof Phaser.Scene).toBe(true);
});