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
    this.dialogue = this.cache.json.get('pride-and-prejudice');

    this.story = new Story(this.dialogue);

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

    this.characters.forEach((character) => {
      character.visible = character.name === data.name;
    });

    this.events.emit('UpdateText', { text, data, choices });
  }

  handleChoice(choiceIndex) {
    this.story.ChooseChoiceIndex(choiceIndex);
    this.continueStory();
  }
}
