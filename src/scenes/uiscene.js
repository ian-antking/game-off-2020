import Phaser from 'phaser';
import TextBox from '../ui-objects/text-box';
import AlignGrid from '../utils/alignGrid';

export default class UiScene extends Phaser.Scene {
  constructor() {
    super('UI');
  }

  onUpdateText(data) {
    this.textBox.update(data);
  }

  init() {
    this.gameScene = this.scene.get('Game');
  }

  create() {
    this.grid = new AlignGrid({ scene: this });
    this.grid.show();
    this.grid.showNumbers();

    this.textBox = new TextBox(this);

    this.grid.placeAt( 2, 3, this.textBox);

    this.gameScene.events.on('UpdateText', this.onUpdateText, this);

    this.input.keyboard.on('keydown-SPACE', () => {
      this.gameScene.continueStory();
    });

    this.gameScene.continueStory();
  }
}
