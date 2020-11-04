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
    this.metaDialogue = this.cache.json.get('meta-test');

    this.introDialogue = new Story(this.metaDialogue);

    this.textStyle = {
      fill: '#ffffff',
      font: '12px future-thin',
      align: 'left',
      wordWrap: { width: 450, useAdvancedWrap: true }
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
    console.log(JSON.parse(this.introDialogue.currentTags) );
  }
}
