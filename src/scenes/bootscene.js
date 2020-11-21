import Phaser from 'phaser';
import SaveManager from '../utils/save-manager';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  init() {
    this.saveGame = SaveManager.loadSave();
  }

  create() {
    this.scene.start('Preloader', this.saveGame);
  }
}
