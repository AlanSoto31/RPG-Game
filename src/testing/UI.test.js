import 'jest-canvas-mock';
import 'phaser';
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
  
  test('Actions-Menu is an instance of Menu', () => {
    expect(ActionsMenu.prototype instanceof Menu).toBe(true);
  });
  
  test('Enemies-Menu is an instance of Menu', () => {
    expect(EnemiesMenu.prototype instanceof Menu).toBe(true);
  });
  
  test('Heroes-Menu is an instance of Menu', () => {
    expect(HeroesMenu.prototype instanceof Menu).toBe(true);
  });

  test('Message is an instance of Container', () => {
    expect(Message.prototype instanceof Phaser.GameObjects.Container).toBe(true);
  });

  test('UIScene is an instance of Scene', () => {
    expect(UIScene.prototype instanceof Phaser.Scene).toBe(true);
  });