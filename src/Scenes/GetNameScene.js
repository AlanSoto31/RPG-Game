import 'phaser';
import config from '../Config/config';
import Button from '../Objects/Button';

export default class GetNameScene extends Phaser.Scene {
  constructor () {
    super('GetNameScene');
  }

  create(){
    this.text = this.add.text(60, 20, 'Enter your name', { fontSize: 30 });
    this.menuButton = new Button(this, config.width/2, 230, 'blueButton1', 'blueButton2', 'Menu', 'Title');
    
    let textEntry = this.add.text(10, 50, '', { font: '32px Courier', fill: '#ffff00' });

    this.input.keyboard.on('keydown', (event) => {
        if (event.keyCode === 8 && textEntry.text.length > 0){
            textEntry.text = textEntry.text.substr(0, textEntry.text.length - 1);
        }
        else if (event.keyCode === 32 || (event.keyCode >= 48 && event.keyCode < 90)){
            textEntry.text += event.key;
        }

        if(event.code === "Enter" && textEntry.text.length > 0){
          this.scene.start('WorldScene')
        } 
    });
  }
}