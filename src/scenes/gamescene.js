import Phaser from 'phaser';
import { Story } from 'inkjs';
import Character from '../sprites/character';
import characters from '../config/characters';
import backgrounds from '../config/backgrounds';
import BackgroundManager from '../utils/background-manager';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  create() {
    this.dialogue = this.cache.json.get('00-intro');
    this.story = new Story(this.dialogue);

    this.backgroundManager = new BackgroundManager({ 
      scene: this,
      backgroundNames: backgrounds
    });

    this.characters = characters.map(({ name }) => new Character({
      name,
      scene: this,
      x: this.scale.width * 0.7,
      y: this.scale.height/2,
    }));

    this.scene.launch('UI');
  }

  continueStory() {
    this.currentChoices = this.story.currentChoices;
    this.currentText = this.story.canContinue ? this.story.Continue() : this.currentText;
    this.currentTags = this.story.currentTags;

    try {
      this.currentStoryData = JSON.parse(this.currentTags);
    } catch (error) {
      console.warn({ message: error.message, text: this.currentText, tags: this.currentTags });
      this.currentStoryData = {};
    }

    this.events.emit('UpdateText', {
      text: this.currentText,
      data: this.currentStoryData,
      choices: this.currentChoices
    });

    this.backgroundManager.update(this.currentStoryData);

    this.characters.forEach((character) => {
      character.update(this.currentStoryData);
    });
  }

  handleChoice(choiceIndex) {
    this.story.ChooseChoiceIndex(choiceIndex);
    this.continueStory();
  }
}
