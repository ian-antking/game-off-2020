import Phaser from 'phaser';

export default {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
  },
  parent: 'phaser-game',
  width: 700,
  height: 400,
};
