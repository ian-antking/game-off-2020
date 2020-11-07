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
    this.uiBar.removeChoices();
    this.gameScene.handleChoice(index);
  }

  init() {
    this.gameScene = this.scene.get('Game');
  }

  create() {
    this.grid = new AlignGrid({ scene: this });
    this.graphics = this.add.graphics();

    this.bar = this.graphics.fillRect(0, 250, this.scale.width, this.scale.height/2);

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
