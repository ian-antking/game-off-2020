import Phaser from 'phaser';

export default class StoryText extends Phaser.GameObjects.Text {
  constructor({ scene, x, y }) {
    const style =       {
      color: '#ffffff',
      align: 'left',
      font: '12pt future-thin',
      wordWrap:
      {
        width: scene.scale.width * 0.7,
        useAdvancedWrap: true 
      }
    };
    super(scene, x, y, '', style);
    this.scene = scene;

    this.scene.add.existing(this);
    this.setOrigin(0.5);
  }

  update({ text }) {
    this.setText(text);
  }

  clear() {
    this.setText('');
  }
}
