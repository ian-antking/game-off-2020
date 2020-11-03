import 'phaser';
import { Story } from 'inkjs';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
  }

  create() {
    this.introDialogue = this.cache.json.get('test-intro');

    this.introDialogue = new Story(this.introDialogue);

    this.textStyle = {
      fill: '#ffffff',
      font: '16px Arial',
      align: 'left',
      wordWrap: true,
      wordWrapWidth: 620
    };

    this.mainText = this.add.text(10, 10, '', this.textStyle);

    this.continueStory();
  }

  continueStory() {
    let txt = '';

    while (this.introDialogue.canContinue) {
      txt += this.introDialogue.Continue();
    }

    this.mainText.setText(txt);
  }
}
