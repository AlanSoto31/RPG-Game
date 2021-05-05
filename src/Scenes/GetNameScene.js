import 'phaser';
import config from '../Config/config';
import Button from '../Objects/Button';
import ScoreScene from './ScoreScene';

export default class GetNameScene extends Phaser.Scene {
  constructor () {
    super('GetNameScene');
  }

  create(){
    this.model = this.sys.game.globals.model;
    this.text = this.add.text(55, 20, 'Type your name and press ', { fontSize: 20, align: "center", boundsAlignH: "center" });
    this.text = this.add.text(60, 50, 'enter to start the game', { fontSize: 20 });
    this.menuButton = new Button(this, config.width/2, 250, 'blueButton1', 'blueButton2', 'Menu', 'Title');
    
    let textEntry = this.add.text(90, 100, '', { font: '32px Courier', fill: '#ffff00' });

    this.text = this.add.text(20, 150, '←↑→↓', { fontSize: 30 });
    this.text = this.add.text(100, 160, 'to move around the world.', { fontSize: 16 });
    this.text = this.add.text(20, 180, '←', { fontSize: 30 });
    this.text = this.add.text(50, 190, 'or Space bar to use the battle menu.', { fontSize: 16 });

    this.input.keyboard.on('keydown', (event) => {
        if (event.keyCode === 8 && textEntry.text.length > 0){
            textEntry.text = textEntry.text.substr(0, textEntry.text.length - 1);
        }
        else if (event.keyCode === 32 || (event.keyCode >= 48 && event.keyCode < 90) && textEntry.text.length < 12){
            textEntry.text += event.key;
        }

        if(event.code === "Enter" && textEntry.text.length > 0){
          this.model.playerName = textEntry.text;
          //ScoreScene.setGameName();

          //ScoreScene.setScore(this.model.playerName, this.model.score);

          this.scene.start('WorldScene')
        } 
    });
  }
}