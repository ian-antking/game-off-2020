import Phaser from 'phaser';

export default class Character extends Phaser.GameObjects.Sprite {
  constructor({ name, scene, x, y, textureKey }) {
    super(scene, x, y, textureKey);
    this.name = name;
    this.scene = scene;
    this.setScale(0.3);
    this.scene.add.existing(this);
    this.visible = false;
  }

  update({ name }) {
    this.visible = this.name === name;
  }
}