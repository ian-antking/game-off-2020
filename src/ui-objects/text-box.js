import Phaser from 'phaser';
import StoryText from './story-text';

export default class TextBox extends Phaser.GameObjects.Container {
  constructor(scene) {
    super(scene, 0, 0);
    this.scene = scene;

    this.graphics = new Phaser.GameObjects.Graphics(this.scene, {
      lineStyle: {
        width: 4,
        color: 0x61bbe5,
        alpha: 1
      },
      fillStyle: {
        color: 0x61bbe5,
        alpha: 0.7
      }
    });

    this.setSize(this.scene.scale.width, this.scene.scale.height * 0.6);
    this.add(this.graphics);
    this.add(new StoryText({ scene: this.scene, x: 0, y: 0 }));

    this.graphics.fillRect(0 - this.scene.scale.width / 2, 0 - this.scene.scale.height * 0.2 , this.scene.scale.width, this.scene.scale.height * 0.4);
    this.graphics.strokeRect(2 - this.scene.scale.width / 2, 0 - this.scene.scale.height * 0.2 , this.scene.scale.width - 4, this.scene.scale.height * 0.4);

    this.scene.add.existing(this);
  }

  update(data) {
    this.iterate((child) => child.update(data));
  }
}