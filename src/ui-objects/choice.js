import Text from './text';

export default class Choice extends Text {
  constructor({ scene, x, y, style, choice }) {
    super({ scene, x, y, style });
    this.choice = choice;
    this.update(this.choice.text);
    this.setInteractive()
      .on('pointerover', () => this.enterButtonHoverState())
      .on('pointerout', () => this.enterButtonRestState())
      .on('pointerdown', () => this.handleClick());
  }

  handleSkipText() {}

  enterButtonHoverState() {
    this.setStyle({ fill: '#ff0'});
  }

  enterButtonRestState() {
    this.setStyle({ fill: '#fff' });
  }

  handleClick() {
    this.scene.handleChoiceClick(this.choice.index);
  }
}
