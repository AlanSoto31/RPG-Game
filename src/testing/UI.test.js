import 'jest-canvas-mock';
import Phaser from 'phaser';
import Menu from '../UI/Menu';
import MenuItem from '../UI/MenuItem';
import ActionsMenu from '../UI/ActionsMenu';
import EnemiesMenu from '../UI/EnemiesMenu';
import HeroesMenu from '../UI/HeroesMenu';
import Message from '../UI/Message';
import UIScene from '../UI/UIScene';

test('Menu-Item is an instance of Text', () => {
  expect(MenuItem.prototype instanceof Phaser.GameObjects.Text).toBe(true);
});

test('Menu-Item is not an instance of Scene', () => {
  expect(MenuItem.prototype instanceof Phaser.Scene).not.toBe(true);
});

test('ActionsMenu is an instance of Menu', () => {
  expect(ActionsMenu.prototype instanceof Menu).toBe(true);
});


test('ActionsMenu is not an instance of Scene', () => {
  expect(ActionsMenu.prototype instanceof Phaser.Scene).not.toBe(true);
});

test('Enemies-Menu is an instance of Menu', () => {
  expect(EnemiesMenu.prototype instanceof Menu).toBe(true);
});

test('Enemies-Menu is not an instance of Scene', () => {
  expect(EnemiesMenu.prototype instanceof Phaser.Scene).not.toBe(true);
});

test('Heroes-Menu is an instance of Menu', () => {
  expect(HeroesMenu.prototype instanceof Menu).toBe(true);
});

test('Heroes-Menu is not an instance of Scene', () => {
  expect(HeroesMenu.prototype instanceof Phaser.Scene).not.toBe(true);
});

test('Message is an instance of Container', () => {
  expect(Message.prototype instanceof Phaser.GameObjects.Container).toBe(true);
});

test('Message is not an instance of Scene', () => {
  expect(Message.prototype instanceof Phaser.Scene).not.toBe(true);
});

test('UIScene is an instance of Scene', () => {
  expect(UIScene.prototype instanceof Phaser.Scene).toBe(true);
});

test('UIScene is not an instance of Container', () => {
  expect(UIScene.prototype instanceof Phaser.GameObjects.Container).not.toBe(true);
});