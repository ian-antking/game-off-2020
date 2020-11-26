import Phaser from 'phaser';

export default class MusicButton extends Phaser.GameObjects.Image {
  constructor({ scene }) {
    super(scene, 20, 20, 'music-on');
    this.scene = scene;
    this.scene.add.existing(this);
    this.alpha = 0.5;
    this.setInteractive()
      .on('pointerover', () => this.enterButtonHoverState())
      .on('pointerout', () => this.enterButtonRestState())
      .on('pointerdown', () => this.handleClick());
  }

  enterButtonHoverState() {
    this.alpha = 1;
    this.setTint(0xffff00);
  }

  enterButtonRestState() {
    this.alpha = 0.5;
    this.setTint();
  }

  handleClick(){
    const musicMute = this.scene.music.mute;
    this.scene.music.setMute(!musicMute);
    this.setTexture(musicMute ? 'music-on' : 'music-off');
  }

  show() {
    this.visible = true;
  }

  hide() {
    this.visible = false;
  }
}