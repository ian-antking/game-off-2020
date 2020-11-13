import { Story } from 'inkjs';

export default class StoryManager {
  constructor({ scene, chapters }) {
    this.chapterIndex = 0;
    this.scene = scene;
    this.chapters = chapters;
    this.buildChapter();
  }

  get chapterEnd() {
    return !this.story.canContinue && !this.currentChoices.length;
  }

  get currentChapter() {
    return { chapterTitle: this.chapters[this.chapterIndex], chapterNumber: this.chapterIndex  };
  }

  get chapterState() {
    return {
      text: this.currentText,
      data: this.currentMetaData,
      choices: this.currentChoices
    };
  }

  buildChapter() {
    this.dialogueName = this.chapters[this.chapterIndex];
    this.dialogue = this.scene.cache.json.get(this.dialogueName);
    this.story = new Story(this.dialogue);
  }

  nextChapter() {
    this.chapterIndex += 1;
    this.buildChapter();
  }

  getTagData() {
    try {
      this.currentMetaData = JSON.parse(this.currentTags);
    } catch (error) {
      console.warn({ message: error.message, text: this.currentText, tags: this.currentTags });
      this.currentMetaData = {};
    }
  }

  handleChoice(index) {
    this.story.ChooseChoiceIndex(index);
  }

  updateChaperState() {
    this.currentText = this.story.canContinue ? this.story.Continue() : this.currentText;
    this.currentChoices = this.story.currentChoices;
    this.currentTags = this.story.currentTags;
  }

  update() {
    this.updateChaperState();
    this.getTagData();
    return this.chapterState;
  }
}