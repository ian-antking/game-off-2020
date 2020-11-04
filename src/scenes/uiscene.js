import Phaser from 'phaser';
import StoryText from '../ui-objects/story-text';
import Align from '../utils/align';

export default class UiScene extends Phaser.Scene {
  constructor() {
    super('UI');
  }

  onUpdateText({ text }) {
    this.storyText.update(text);
  }

  init() {
    this.gameScene = this.scene.get('Game');
  }

  create() {
    this.storyText = new StoryText({ scene: this, x: 0, y: 0});
    Align.center(this.storyText, this); 

    this.gameScene.events.on('UpdateText', this.onUpdateText, this);

    this.input.keyboard.on('keydown-SPACE', () => {
      this.gameScene.continueStory();
    });

    this.gameScene.continueStory();
  }
}
