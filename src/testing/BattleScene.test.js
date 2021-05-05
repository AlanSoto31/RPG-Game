/* eslint-disable no-undef */
import 'jest-canvas-mock';
import 'phaser';
import BattleScene from '../Scenes/BattleScene';

test('Battle-Scene is an instance of Scene', () => {
  expect(BattleScene.prototype instanceof Phaser.Scene).toBe(true);
});
/* eslint-enable no-undef */