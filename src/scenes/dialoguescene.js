import Phaser from 'phaser';
import BackgroundManager from '../utils/background-manager';
import CharacterManager from '../utils/character-manager';
import characters from '../config/characters';
import backgrounds from '../config/backgrounds';

export default class DialogueScene extends Phaser.Scene {
  constructor() {
    super('Dialogue');
  }

  init({ characterData }) {
    this.gameScene = this.scene.get('Game');
    this.characters = characterData || characters;
  }

  create() {
    this.buildAssetManagers();
    this.gameScene.events.on('UpdateText', this.onUpdateText, this);
    this.gameScene.events.on('NewDialogue', this.buildAssetManagers, this);
    this.gameScene.events.on('DialogueEnd', this.handleDialogueEnd, this);
  }

  buildAssetManagers() {
    this.backgroundManager = new BackgroundManager({ 
      scene: this,
      backgroundNames: backgrounds
    });

    this.characterManager = new CharacterManager({
      scene: this,
      characters: this.characters,
    });
  }

  handleDialogueEnd() {
    this.hide();
    this.gameScene.save(this.characterManager.saveData);
  }

  hide() {
    this.backgroundManager.hideBackgrounds();
    this.characterManager.hideCharacters();
  }

  onUpdateText({ data }) {
    this.backgroundManager.update(data);
    this.characterManager.update(data);
  }
}