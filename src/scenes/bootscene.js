import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  init() {
    this.saveGame = localStorage.getItem('saveGame');
  }

  create() {
    this.scene.start('Preloader', this.saveGame);
  }
}
