import 'phaser';
import Unit from './Unit';

export default class PlayerCharacter extends Unit {
  constructor(scene, x, y, texture, frame, type, hp, damage) {
    super(scene, x, y, texture, frame, type, hp, damage);
    this.flipX = true;

    this.setScale(2);
  }
}