import Phaser from 'phaser';

export default class Character extends Phaser.GameObjects.Sprite {
  constructor({ scene, x, y, textureKey }) {
    super(scene, x, y, textureKey);
    this.scene = scene;
    this.setScale(0.3);
    this.scene.add.existing(this);
  }
}