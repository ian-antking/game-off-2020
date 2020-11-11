import Phaser from 'phaser';
import { Story } from 'inkjs';
import dialogues from '../config/dialogues';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  init() {
    this.dialogueIndex = 0;
  }

  create() {
    this.buildDialogue();
    this.scene.launch('Dialogue');
    this.scene.launch('UI');
    this.scene.swapPosition('UI', 'Dialogue');
  }

  continueStory() {
    this.currentText = this.story.canContinue ? this.story.Continue() : this.currentText;
    this.currentChoices = this.story.currentChoices;
    this.currentTags = this.story.currentTags;
    if(!this.story.canContinue && !this.currentChoices.length) {
      this.dialogueIndex += 1;
      this.buildDialogue();
    } else {
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
    }
  }

  buildDialogue() {
    this.dialogueName = dialogues[this.dialogueIndex];
    this.dialogue = this.cache.json.get(this.dialogueName);
    this.story = new Story(this.dialogue);
  }

  handleChoice(choiceIndex) {
    this.story.ChooseChoiceIndex(choiceIndex);
    this.continueStory();
  }
}
