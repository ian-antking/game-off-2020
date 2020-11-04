import Phaser from 'phaser';

export default class NameTage extends Phaser.GameObjects.Text{
  constructor({ scene, x, y }) {
    const style =       {
      color: '#ffffff',
      align: 'left',
      fontSize: 14,
    };
    super(scene, x, y, '', style);
    this.scene = scene;

    this.scene.add.existing(this);
  }

  update({ data }) {
    this.setText(data.name);
  }

  clear() {
    this.setText('');
  }
}