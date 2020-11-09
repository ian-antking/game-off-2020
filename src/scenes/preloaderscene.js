import Phaser from 'phaser';
import characters from '../config/characters';
import backgrounds from '../config/backgrounds';

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  init() {
    this.readyCount = 0;
  }

  ready() {
    this.readyCount += 1;
    if (this.readyCount >= 2) {
      this.scene.start('Title');
    }
  }

  preload() {
    const canvas = document.querySelector('canvas');
    const progressBarX = (canvas.width / 2) - 160;
    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(progressBarX, 270, 320, 50);

    const width = this.cameras.main.width;
    const height = this.cameras.main.height;
    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 100,
      text: 'Loading...',
      style: {
        font: '20px future-thin',
        fill: '#ffffff',
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: '0%',
      style: {
        font: '18px future-thin',
        fill: '#ffffff',
      },
    });
    percentText.setOrigin(0.5, 0.5);

    const assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px future-thin',
        fill: '#ffffff',
      },
    });
    assetText.setOrigin(0.5, 0.5);

    this.load.on('progress', (value) => {
      percentText.setText(`${parseInt(value * 100)}%`);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(progressBarX + 10, 280, 300 * value, 30);
    });

    this.load.on('fileprogress', (file) => {
      assetText.setText(`Loading asset: ${file.key}`);
    });

    this.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      this.ready();
    });

    this.timedEvent = this.time.delayedCall(1000, this.ready, [], this);

    //images
    this.load.image('logo', 'assets/logo.png');

    //cutscenes
    backgrounds.forEach((background) => this.loadBackground(background));

    //dialogues
    this.load.json('00-intro', 'dialogue/00-intro.json');

    //characters
    characters.forEach((name) => this.loadCharacterData(name.toLowerCase()));
  }

  loadBackground(background) {
    this.load.image(background, `assets/backgrounds/${background}.png`);
  }

  loadCharacterData(character) {
    const moods = ['attention', 'excited', 'neutral', 'wave', 'wink1', 'wink2'];
    moods.forEach(mood => {
      const key = `${character}-${mood}`;
      this.load.image(key, `assets/characters/${character}/${key}.png`);
    });
  }
}
