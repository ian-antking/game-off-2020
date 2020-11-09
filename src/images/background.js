import Phaser from 'phaser';

export default class Background extends Phaser.GameObjects.Image {
  constructor(scene, texture) {
    super(scene, scene.scale.width/2, scene.scale.height/2, texture);

    this.scene = scene;
    this.name = texture;
    this.displayWidth = this.scene.scale.width;
    this.displayHeight = this.scene.scale.height;
    this.depth=0;
    this.alpha=0;
    this.scene.add.existing(this);
    // this.scene.tweens.add({
    //   targets: this,
    //   duration: 500,
    //   alpha: 0.5
    // });
  }
}
