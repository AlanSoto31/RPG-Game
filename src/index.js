import Phaser from 'phaser';
import config from './Config/config';
import BootScene from './Scenes/BootScene';
import PreloaderScene from './Scenes/PreloaderScene';
import TitleScene from './Scenes/TitleScene';
import OptionsScene from './Scenes/OptionsScene';
import CreditsScene from './Scenes/CreditsScene';
import Model from './Model';
import WorldScene from './Scenes/WorldScene';
import BattleScene from './Scenes/BattleScene';
import UIScene from './UI/UIScene';
import GetNameScene from './Scenes/GetNameScene';
import GameOverScene from './Scenes/GameOverScene';
import LeaderboardScene from './Scenes/LeaderboardScene';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    const model = new Model();
    this.globals = { model, bgMusic: null };
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('WorldScene', WorldScene);
    this.scene.add('BattleScene', BattleScene);
    this.scene.add('UIScene', UIScene);
    this.scene.add('GetNameScene', GetNameScene);
    this.scene.add('GameOverScene', GameOverScene);
    this.scene.add('LeaderboardScene', LeaderboardScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();