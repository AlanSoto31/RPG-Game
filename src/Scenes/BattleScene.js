import 'phaser';
import Enemy from '../Characters/Enemy';
import PlayerCharacter from '../Characters/PlayerCharacter';
import ScoreScene from './ScoreScene';

export default class BattleScene extends Phaser.Scene {
    constructor () {
      super('BattleScene');
    }

    create(){    
        this.model = this.sys.game.globals.model;
        // change the background to green
        this.cameras.main.setBackgroundColor("rgba(0, 168, 255,1.0)");
        this.startBattle();
        // on wake event we call startBattle too
        this.sys.events.on('wake', this.startBattle, this);             
    }

    startBattle() {
        // player character - warrior
        var warrior = new PlayerCharacter(this, 300, 60, "player", 1, "Manatee1", 30, 15);        
        this.add.existing(warrior);
        
        // player character - mage
        var mage = new PlayerCharacter(this, 300, 120, "player", 4, "Manatee2", 30, 10);
        this.add.existing(mage);            
        
        var dragonblue = new Enemy(this, 100, 60, "octopus", null, "Octopus", 50, 20);
        this.add.existing(dragonblue);
        
        var dragonOrange = new Enemy(this, 100, 120, "jellyfish", null,"Jellyfish", 50, 10);
        this.add.existing(dragonOrange);
        
        // array with heroes
        this.heroes = [ warrior, mage ];
        // array with enemies
        this.enemies = [ dragonblue, dragonOrange ];
        // array with both parties, who will attack
        this.units = this.heroes.concat(this.enemies);
        
        this.index = -1; // currently active unit
        
        this.scene.run("UIScene");        
    }

    nextTurn() {  
        //this.checkEndBattle()
         // if we have victory or game over
        if(this.checkEndBattle()) {        
            this.endBattle(true);
            return;
        }

        do {
            // currently active unit
            this.index++;
            // if there are no more units, we start again from the first one
            if(this.index >= this.units.length) {
                this.index = 0;
            }            
        } while(!this.units[this.index].living);
        // if its player hero
        if(this.units[this.index] instanceof PlayerCharacter) {
            // we need the player to select action and then enemy
            this.events.emit("PlayerSelect", this.index);
        } else { // else if its enemy unit
            // pick random living hero to be attacked
            var r;
            do {
                r = Math.floor(Math.random() * this.heroes.length);
            } while(!this.heroes[r].living) 
            // call the enemy's attack function 
            this.units[this.index].attack(this.heroes[r]);  
            // add timer for the next turn, so will have smooth gameplay
            this.time.addEvent({ delay: 1000, callback: this.nextTurn, callbackScope: this });
        }
    }     
    // check for game over or victory
    checkEndBattle() {        
        var victory = true;
        // if all enemies are dead we have victory
        for(var i = 0; i < this.enemies.length; i++) {
            if(this.enemies[i].living)
                victory = false;
        }
        var gameOver = true;
        // if all heroes are dead we have game over
        for(var i = 0; i < this.heroes.length; i++) {
            if(this.heroes[i].living)
                gameOver = false;
        }

         if(gameOver === true){
            this.gameOver = true;
        }
        return victory || gameOver;
    }
    // when the player have selected the enemy to be attacked
    receivePlayerSelection(action, target) {
        if(action == "attack") {            
            this.units[this.index].attack(this.enemies[target]);              
        }
        // next turn in 3 seconds
        this.time.addEvent({ delay: 1000, callback: this.nextTurn, callbackScope: this });        
    }

    endBattle() {       
        // clear state, remove sprites
        this.heroes.length = 0;
        this.enemies.length = 0;
        for(var i = 0; i < this.units.length; i++) {
            // link item
            this.units[i].destroy();            
        }
        this.units.length = 0;
        // sleep the UI
        this.scene.sleep('UIScene');
        // return to WorldScene and sleep current BattleScene
        if(this.gameOver){
            //ScoreScene.setScore(this.model.playerName, this.model.score);
            this.scene.switch('GameOverScene');
        }else{
            this.scene.switch('WorldScene');
        }
        
    }
};





