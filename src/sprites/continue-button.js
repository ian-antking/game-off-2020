import Phaser from 'phaser';

export default class ContinueButton extends Phaser.GameObjects.Image {
  constructor({ scene, x, y, texture }) {
    super(scene, x, y, texture);
    this.scene = scene;
    this.scene.add.existing(this);
    this.alpha = (0.5);
    this.setInteractive()
      .on('pointerover', () => this.enterButtonHoverState())
      .on('pointerout', () => this.enterButtonRestState())
      .on('pointerdown', () => this.scene.events.emit('ContinueClick'));
    this.visible = false;
  }

  enterButtonHoverState() {
    this.setTint(0xffff00);
  }

  enterButtonRestState() {
    this.setTint();
  }

  show() {
    this.visible = true;
  }

  hide() {
    this.visible = false;
  }
}
