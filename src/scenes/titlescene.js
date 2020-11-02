import 'phaser';
import Align from '../utils/align';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  preload() {
  }

  create() {
    this.logo = this.add.image(0, 0, 'logo');
    Align.center(this.logo, this);
    this.logo.y -= 50;
    this.logo.setScale(0.75);

    this.titleText = this.make.text({
      text: 'Press Spacebar',
      style: {
        font: '20px future-thin',
        fill: '#ffffff',
      },
    });
    this.titleText.setOrigin(0.5, 0.5);
    Align.center(this.titleText, this);
    this.titleText.y += 100;

    this.input.keyboard.on('keydown-SPACE', () => {
      this.scene.start('Game');
    });
  }
}
