import 'phaser';
import { Story } from 'inkjs';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
  }

  create() {
    this.dialogue = this.cache.json.get('pride-and-prejudice');

    this.story = new Story(this.dialogue);

    this.scene.launch('UI');
  }

  continueStory() {
    let text;
    let data;
    let choices;

    if (this.story.canContinue) {
      text = this.story.Continue();
      choices = this.story.currentChoices;
      const tags = this.story.currentTags;
      
      try {
        data = JSON.parse(tags);
      } catch (error) {
        console.warn({ message: error.message, text, tags });
        data = {};
      }

    } else {
      text = 'The End?';
      data = {};
    }
    this.events.emit('UpdateText', { text, data, choices });
  }

  handleChoice(choiceIndex) {
    this.story.ChooseChoiceIndex(choiceIndex);
    this.continueStory();
  }
}
