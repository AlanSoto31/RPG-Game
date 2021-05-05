/* eslint-disable no-undef */
import 'jest-canvas-mock';
import 'phaser';
import GetNameScene from '../Scenes/GetNameScene';

test('GetName-Scene is an instance of Scene', () => {
  expect(GetNameScene.prototype instanceof Phaser.Scene).toBe(true);
});
/* eslint-enable no-undef */