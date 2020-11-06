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

    this.backdrop = this.add.image(this.scale.width/2, this.scale.height/2, 'test-cafe');
    this.backdrop.setAlpha(0.5);

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
    let data;
    const choices = this.story.currentChoices;
    const text = this.story.canContinue ? this.story.Continue() : null
    const tags = this.story.currentTags;

    try {
      data = JSON.parse(tags);
    } catch (error) {
      console.warn({ message: error.message, text, tags });
      data = {};
    }

    this.events.emit('UpdateText', { text, data, choices });
    
    this.characters.forEach((character) => {
      character.visible = character.name === data?.name;
    });
  }

  handleChoice(choiceIndex) {
    this.story.ChooseChoiceIndex(choiceIndex);
    this.continueStory();
  }
}
