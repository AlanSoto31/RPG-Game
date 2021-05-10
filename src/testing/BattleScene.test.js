import 'jest-canvas-mock';
import Phaser from 'phaser';
import 'regenerator-runtime';
import BattleScene from '../Scenes/BattleScene';

test('Battle-Scene is an instance of Scene', () => {
  expect(BattleScene.prototype instanceof Phaser.Scene).toBe(true);
});

test('Battle-Scene is not an instance of Text', () => {
  expect(BattleScene.prototype instanceof Phaser.GameObjects.Text).not.toBe(true);
});