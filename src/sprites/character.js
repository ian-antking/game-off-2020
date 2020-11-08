import Phaser from 'phaser';

export default class Character extends Phaser.GameObjects.Sprite {
  constructor({ name, scene, x, y, textureKey }) {
    super(scene, x, y, textureKey);
    this.name = name;
    this.scene = scene;
    this.setScale(0.3);
    this.scene.add.existing(this);
    this.alpha = 0;
    this.depth=1;
  }

  update({ name }) {
    if (this.name.toLowerCase() === name) {
      this.scene.tweens.add({
        targets: this,
        duration: 500,
        alpha: 1
      });
    } else {
      this.scene.tweens.add({
        targets: this,
        duration: 500,
        alpha: 0
      }); 
    }
  }
}