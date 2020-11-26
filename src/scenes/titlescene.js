import Phaser from 'phaser';
import Align from '../utils/align';
import SaveManager from '../utils/save-manager';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  init() {
    this.saveGame = SaveManager.loadSave();
  }

  create() {
    this.music = this.sound.add('title-music');
    this.music.play();

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
    this.logo.setScale(0.3);

    this.newGameText = this.make.text({
      text: 'New Game',
      style: {
        fontFamily: '"Press Start 2P"',
        fontSixe: '20px',
        fill: '#ffffff',
      },
    });
    this.newGameText
      .setOrigin(0.5, 0.5)
      .setInteractive()
      .on('pointerover', () => this.enterButtonHoverState(this.newGameText))
      .on('pointerout', () => this.enterButtonRestState(this.newGameText))
      .on('pointerdown', () => this.startGame());

    Align.center(this.newGameText, this);
    this.newGameText.y += 100;

    if (this.saveGame) {
      this.continueText = this.make.text({
        text: 'Continue',
        style: {
          fontFamily: '"Press Start 2P"',
          fontSixe: '20px',
          fill: '#ffffff',
        },
      });

      this.continueText
        .setOrigin(0.5, 0.5)
        .setInteractive()
        .on('pointerover', () => this.enterButtonHoverState(this.continueText))
        .on('pointerout', () => this.enterButtonRestState(this.continueText))
        .on('pointerdown', () => this.startGame(this.saveGame));

      Align.center(this.continueText, this);
      this.continueText.y += 150;
    }
  }

  enterButtonHoverState(button) {
    button.setStyle({ fill: '#ff0'});
  }

  enterButtonRestState(button) {
    button.setStyle({ fill: '#fff' });
  }

  startGame(saveGame) {
    this.music.stop();
    this.scene.start('Game', saveGame || null);
  }
}
