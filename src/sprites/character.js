import Phaser from 'phaser';

export default class Character extends Phaser.GameObjects.Sprite {
  constructor({ name, scene, x, y, affinity }) {
    super(scene, x, y, `${name.toLowerCase()}-neutral`);
    this.scene = scene;
    this.name = name;
    this.affinity = affinity || 0;
    this.setScale(0.5);
    this.scene.add.existing(this);
    this.alpha = 0;
    this.depth=10;
  }

  get saveData() {
    return {
      name: this.name,
      affinity: this.affinity
    };
  }

  update({ name, mood, affinity }) {
    if (affinity) {
      this.affinity += affinity;
    }
    this.textureKey = mood ? `${this.name.toLowerCase()}-${mood}` : this.textureKey;
    if (mood) {
      this.setTexture(this.textureKey);
    }
    if (this.name === name) {
      this.show();
    } else {
      this.hide();
    }
  }

  show() {
    this.scene.tweens.add({
      targets: this,
      duration: 500,
      alpha: 1
    });
  }

  hide() {
    this.scene.tweens.add({
      targets: this,
      duration: 500,
      alpha: 0
    }); 
  }
}