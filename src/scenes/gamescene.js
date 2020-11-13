import Phaser from 'phaser';
import StoryManager from '../utils/story-manager';
import dialogues from '../config/dialogues';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  create() {
    this.story = new StoryManager({ scene: this, chapters: dialogues });

    this.scene.launch('Splash');
    this.scene.launch('Dialogue');
    this.scene.launch('UI');
  }

  continueStory() {
    if(this.story.chapterEnd) {
      this.story.nextChapter();
      this.handleNewChapter();
    } else {
      this.updateText(this.story.update());
    }
  }

  handleContinueClick(action) {
    this[action]();
  }

  handleNewChapter() {
    this.events.emit('DialogueEnd', this.story.currentChapter);
  }

  updateText(storyData) {
    this.events.emit('UpdateText', storyData);
  }

  handleChoice(choiceIndex) {
    this.story.handleChoice(choiceIndex);
    this.continueStory();
  }
}
