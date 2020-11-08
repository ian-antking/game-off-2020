import 'phaser';
import { Story } from 'inkjs';
import Character from '../sprites/character';
import characters from '../config/characters';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
  }

  create() {
    this.dialogue = this.cache.json.get('00-intro');

    this.story = new Story(this.dialogue);

    this.backdrop = this.add.image(this.scale.width/2, this.scale.height/2, 'moonshot-main');

    this.backdrop.setAlpha(0);
    this.tweens.add({
      targets: this.backdrop,
      duration: 500,
      alpha: 1
    });

    this.backdrop.displayWidth = this.scale.width;

    this.backdrop.displayHeight = this.scale.height;

    this.characters = characters.map((character) => new Character({
      name: character.name,
      scene: this,
      x: this.scale.width/2,
      y: (this.scale.height/2)+50,
      textureKey: character.texture,
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

    this.currentStoryData.background && this.backdrop.setTexture(this.currentStoryData.background);
    
    this.characters.forEach((character) => {
      character.update(this.currentStoryData);
    });
  }

  handleChoice(choiceIndex) {
    this.story.ChooseChoiceIndex(choiceIndex);
    this.continueStory();
  }
}
