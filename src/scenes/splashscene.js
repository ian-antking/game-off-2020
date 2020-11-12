import Phaser from 'phaser';
import Text from '../ui-objects/text';

export default class SplashScene extends Phaser.Scene {
  constructor() {
    super('Splash');
  }

  init() {
    this.gameScene = this.scene.get('Game');
  }

  create() {
    this.cameras.main.setBackgroundColor('#000000');

    this.titleStyle = {
      color: '#ffffff',
      align: 'center',
      fontSize: '25pt',
      fontFamily: 'Play',
    };

    this.chapterText = new Text({ scene: this, x: this.scale.width/2, y:this.scale.height/2 - 100, style: this.titleStyle });
    this.chapterText.setOrigin(0.5);

    this.titleText = new Text({ scene: this, x: this.scale.width/2, y:this.scale.height/2, style: this.titleStyle });
    this.titleText.setOrigin(0.5);

    this.gameScene.events.on('DialogueEnd', this.onDialogueEnd, this);
    this.scene.sendToBack();
  }

  updateText({ chapterNumber, chapterTitle }) {
    const title = chapterTitle.charAt(0).toUpperCase() + chapterTitle.slice(1);
    this.chapterText.update(`Chapter ${chapterNumber}`);
    this.titleText.update(title);
  }

  fadeOut() {
    this.cameras.main.fadeOut(2000, 0, 0, 0, this.exitSplashScreen, this);
  }

  fadeIn() {
    this.cameras.main.fadeIn(2000, 0, 0, 0, this.wait, this);
  }


  exitSplashScreen(_, progress) {
    if (progress === 1) {
      this.gameScene.continueStory();
    }
  }
  
  wait(_, progress) {
    if (progress === 1) {
      this.time.addEvent({delay: 2000, callback: this.fadeOut, callbackScope: this});
      this.fadeOut();
    }
  }

  onDialogueEnd(data) {
    this.updateText(data);
    this.fadeIn(2000, 0, 0, 0, this.wait, this);
  }
}
