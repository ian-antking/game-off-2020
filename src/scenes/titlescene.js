import Phaser from 'phaser';
import Align from '../utils/align';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  init(saveGame) {
    this.saveGame = saveGame;
  }

  create() {
    this.background = this.add.tileSprite(
      this.scale.width/2,
      this.scale.height/2,
      this.scale.width,
      this.scale.height,
      'space'
    );

    const raysArray = [];
    for (let i = -11; i < 12; i += 1) {
      const ray = this.add.sprite(this.scale.width / 2, this.scale.height + 10, 'ray');
      ray.setOrigin(0.5, 1);
      ray.angle = i * 12;
      ray.displayHeight = this.game.config.height * 1.5;
      ray.displayWidth = this.game.config.width / 10;
      ray.alpha = 0.1;
      raysArray.push(ray);
    }
    this.tweens.add({
      targets: raysArray,
      props: {
        angle: {
          value: '+= 12',
        },
      },
      duration: 8000,
      repeat: -1,
    });

    this.logo = this.add.image(0, 0, 'logo');
    Align.center(this.logo, this);
    this.logo.y -= 50;
    this.logo.setScale(0.75);

    this.titleText = this.make.text({
      text: 'New Game',
      style: {
        fontFamily: '"Press Start 2P"',
        fontSixe: '20px',
        fill: '#ffffff',
      },
    });
    this.titleText
      .setOrigin(0.5, 0.5)
      .setInteractive()
      .on('pointerover', () => this.enterButtonHoverState())
      .on('pointerout', () => this.enterButtonRestState())
      .on('pointerdown', () => this.startGame());

    Align.center(this.titleText, this);
    this.titleText.y += 100;
  }

  enterButtonHoverState() {
    this.titleText.setStyle({ fill: '#ff0'});
  }

  enterButtonRestState() {
    this.titleText.setStyle({ fill: '#fff' });
  }

  startGame(saveGame) {
    this.scene.start('Game', saveGame || null);
  }
}
