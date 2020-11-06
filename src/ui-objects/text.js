import Phaser from 'phaser';

export default class StoryText extends Phaser.GameObjects.Text {
  constructor({ scene, x, y }) {
    const style =       {
      color: '#ffffff',
      align: 'left',
      font: '12pt future-thin',
      wordWrap:
      {
        width: scene.scale.width * 0.9,
        useAdvancedWrap: true 
      }
    };
    super(scene, x, y, '', style);
    this.scene = scene;

    this.scene.add.existing(this);
    this.setOrigin(0.5);
  }

  _animateText(text) {
    this.letterIndex = 0;
    this.dialogue = text.split('');
    if (this.timedEvent) this.timedEvent.remove();

    this.setText('');
    this.timedEvent = this.scene.time.addEvent({
      delay: 60,
      callback: () => {
        this.letterIndex++;
        this.setText(this.text + this.dialogue[this.letterIndex - 1]);
        if (this.letterIndex === this.dialogue.length) {
          this.timedEvent.remove();
        }
      },
      callbackScope: this,
      loop: true
    });
  }

  update({ text, data }) {
    if (data.name) {
      this._animateText(text);
    } else {
      this.setText(text);
    }
  }

  clear() {
    this.setText('');
  }
}
