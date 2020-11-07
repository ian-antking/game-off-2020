import Phaser from 'phaser';
import UiBar from '../ui-objects/ui-bar';
import AlignGrid from '../utils/alignGrid';

export default class UiScene extends Phaser.Scene {
  constructor() {
    super('UI');
  }

  onUpdateText(data) {
    this.uiBar.update(data);
  }

  handleChoiceClick(index) {
    this.gameScene.handleChoice(index);
  }

  init() {
    this.gameScene = this.scene.get('Game');
  }

  create() {
    this.grid = new AlignGrid({ scene: this });

    this.uiBar = new UiBar(this);

    this.grid.placeAt( 2, 3, this.uiBar);

    this.gameScene.events.on('UpdateText', this.onUpdateText, this);

    this.input.keyboard.on('keydown-SPACE', () => {
      this.gameScene.continueStory();
    });

    this.input.on('pointerdown', () => {
      this.gameScene.continueStory();
    });

    this.gameScene.continueStory();
  }
}
