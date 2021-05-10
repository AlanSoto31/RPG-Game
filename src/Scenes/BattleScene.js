import Phaser from 'phaser';
import Enemy from '../Characters/Enemy';
import PlayerCharacter from '../Characters/PlayerCharacter';
import ScoreScene from './score';

export default class BattleScene extends Phaser.Scene {
  constructor() {
    super('BattleScene');
  }

  create() {
    this.model = this.sys.game.globals.model;
    this.cameras.main.setBackgroundColor('rgba(0, 168, 255,1.0)');
    this.startBattle();
    this.sys.events.on('wake', this.startBattle, this);
  }

  startBattle() {
    const warrior = new PlayerCharacter(this, 300, 60, 'player', 1, 'Manatee1', 50, 15);
    this.add.existing(warrior);

    const mage = new PlayerCharacter(this, 300, 120, 'player', 4, 'Manatee2', 30, 10);
    this.add.existing(mage);

    const dragonblue = new Enemy(this, 100, 60, 'octopus', null, 'Octopus', 50, 20);
    this.add.existing(dragonblue);

    const dragonOrange = new Enemy(this, 100, 120, 'jellyfish', null, 'Jellyfish', 30, 10);
    this.add.existing(dragonOrange);

    this.heroes = [warrior, mage];
    this.enemies = [dragonblue, dragonOrange];
    this.units = this.heroes.concat(this.enemies);

    this.index = -1;

    this.scene.run('UIScene');
  }

  nextTurn() {
    if (this.checkEndBattle()) {
      this.endBattle(true);
      return;
    }

    do {
      this.index += 1;
      if (this.index >= this.units.length) {
        this.index = 0;
      }
    } while (!this.units[this.index].living);
    if (this.units[this.index] instanceof PlayerCharacter) {
      this.events.emit('PlayerSelect', this.index);
    } else {
      let r;
      do {
        r = Math.floor(Math.random() * this.heroes.length);
      } while (!this.heroes[r].living);
      this.units[this.index].attack(this.heroes[r]);
      this.time.addEvent({ delay: 1000, callback: this.nextTurn, callbackScope: this });
    }
  }

  checkEndBattle() {
    let victory = true;
    for (let i = 0; i < this.enemies.length; i += 1) {
      if (this.enemies[i].living) { victory = false; }
    }
    let gameOver = true;
    for (let i = 0; i < this.heroes.length; i += 1) {
      if (this.heroes[i].living) {
        gameOver = false;
        this.gameOver = false;
      }
    }

    if (gameOver === true) {
      this.gameOver = true;
    }
    return victory || gameOver;
  }

  receivePlayerSelection(action, target) {
    if (action === 'attack') {
      this.units[this.index].attack(this.enemies[target]);
    }
    this.time.addEvent({ delay: 1000, callback: this.nextTurn, callbackScope: this });
  }

  endBattle() {
    this.heroes.length = 0;
    this.enemies.length = 0;
    for (let i = 0; i < this.units.length; i += 1) {
      this.units[i].destroy();
    }
    this.units.length = 0;
    this.scene.sleep('UIScene');
    if (this.gameOver) {
      ScoreScene.setScore(this.model.playerName, this.model.score);
      this.scene.switch('GameOverScene');
    } else {
      this.scene.switch('WorldScene');
    }
  }
}
