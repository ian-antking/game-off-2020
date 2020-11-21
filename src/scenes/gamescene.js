import Phaser from 'phaser';
import StoryManager from '../utils/story-manager';
import dialogues from '../config/dialogues';
import SaveManager from '../utils/save-manager';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  init(save) {
    this.saveData = save;
  }

  create() {
    const { story } = this.saveData;
    this.story = new StoryManager({
      scene: this,
      chapters: story?.chapters || dialogues,
      currentChapter: story?.chapterIndex || 0
    });

    this.scene.launch('Splash');
    this.scene.launch('Dialogue');
    this.scene.launch('UI');
  }

  continueStory() {
    if(this.story.chapterEnd) {
      this.updateText({text: '', data: {}, choices: []});
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

  save(characterData) {
    SaveManager.saveGame({
      story: this.story.saveData,
      characters: characterData,
    });
  }

  updateText(storyData) {
    this.events.emit('UpdateText', storyData);
  }

  handleChoice(choiceIndex) {
    this.story.handleChoice(choiceIndex);
    this.continueStory();
  }
}
