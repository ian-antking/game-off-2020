import 'phaser';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  preload() {
  }

  create() {
    const { width, height } = this.scale;
    this.logo = this.add.image((width / 2), (height / 2) - 50, 'logo');
    this.logo.setScale(0.75);
    
    const titleText = this.make.text({
      x: width / 2,
      y: height / 2 + 100,
      text: 'Press Spacebar',
      style: {
        font: '20px future-thin',
        fill: '#ffffff',
      },
    });
    titleText.setOrigin(0.5, 0.5);
    this.spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    this.input.keyboard.on('keydown-SPACE', () => {
      this.scene.start('Game');
    });
  }
}
