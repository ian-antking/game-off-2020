import Phaser from 'phaser';
import UiBar from '../ui-objects/ui-bar';
import AlignGrid from '../utils/alignGrid';

export default class UiScene extends Phaser.Scene {
  constructor() {
    super('UI');
  }

  onUpdateText(data) {
    this.bar.visible = data.data.hide ? false : true;
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
    this.grid = new AlignGrid({ scene: this, rows:13, columns:11 });

    this.bar = this.add.rectangle(
      0,
      0,
      this.scale.width - 10,
      this.scale.height/3,
      0x62466b,
      0.5
    );

    this.bar.setStrokeStyle(5,0xec9ded);

    this.uiBar = new UiBar(this);
    this.grid.placeAt( 5, 9, this.uiBar);
    this.grid.placeAt( 5, 10, this.bar);

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
