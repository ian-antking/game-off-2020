import Phaser from 'phaser';
import UiBar from '../ui-objects/ui-bar';
import AlignGrid from '../utils/align-grid';
import ContinueButton from '../sprites/continue-button';

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

  handleContinueClick() {
    this.continueButton.hide();
    this.gameScene.continueStory();
  }

  textUpdated() {
    !this.gameScene.currentChoices.length && this.continueButton.show();
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

    this.continueButton = new ContinueButton({
      scene: this,
      x: this.scale.width - 80,
      y: this.scale.height - 75,
      texture: 'continue-button'
    });

    this.uiBar = new UiBar(this);
    this.grid.placeAt( 5, 9, this.uiBar);
    this.grid.placeAt( 5, 10, this.bar);

    this.gameScene.events.on('UpdateText', this.onUpdateText, this);
    this.events.on('TextUpdated', this.textUpdated, this);
    this.events.on('ContinueClick', this.handleContinueClick, this);

    this.input.keyboard.on('keydown-ENTER', () => {
      this.events.emit('SkipText');
    });

    this.gameScene.continueStory();
  }
}
