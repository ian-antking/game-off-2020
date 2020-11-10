import Phaser from 'phaser';

export default class StoryText extends Phaser.GameObjects.Text {
  constructor({ scene, x, y, style }) {
    super(scene, x, y, '', style);
    this.scene = scene;

    this.scene.add.existing(this);

    this.scene.events.on('SkipText', this.handleSkipText, this);
  }

  _animateText(text) {
    this.letterIndex = 0;
    this.dialogue = text.split('');
    if (this.timedEvent) this.timedEvent.remove();

    this.setText('');
    this.timedEvent = this.scene.time.addEvent({
      delay: 20,
      callback: () => {
        this.letterIndex++;
        this.setText(this.text + this.dialogue[this.letterIndex - 1]);
        if (this.letterIndex === this.dialogue.length) {
          this.timedEvent.remove();
          this.scene.events.emit('TextUpdated');
        }
      },
      callbackScope: this,
      loop: true
    });
  }

  show() {
    this.visible = true;
  }

  hide() {
    this.visible = false;
  }

  handleSkipText() {
    this.timedEvent && this.timedEvent.remove();
    this.update(this.currentText);
    this.scene.events.emit('TextUpdated');
  }

  update(text, animated = false) {
    this.currentText = text;
    if (animated) {
      this._animateText(this.currentText);
    } else {
      this.setText(this.currentText);
    }
  }

  clear() {
    this.setText('');
  }
}
