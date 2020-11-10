import Phaser from 'phaser';

export default class ContinueButton extends Phaser.GameObjects.Image {
  constructor({ scene, x, y, texture }) {
    super(scene, x, y, texture);
    this.scene = scene;
    this.scene.add.existing(this);
    this.alpha = (0.5);
    this.setInteractive()
      .on('pointerdown', () => this.scene.events.emit('ContinueClick'));
    this.visible = false;
  }

  show() {
    this.visible = true;
  }

  hide() {
    this.visible = false;
  }
}
