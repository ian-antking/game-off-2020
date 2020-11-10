import { Column } from 'phaser-ui-tools';
import Choice from './choice';

export default class ChoiceBox extends Column {
  constructor({ scene, x, y, choices }) {
    super(scene, x, y);
    this.scene = scene;

    this.choiceStyle = {
      color: '#ffffff',
      align: 'center',
      fontSize: '13pt',
      fontFamily: 'Play',
    };

    choices.forEach(choice => {
      const choiceText = new Choice({
        scene: this.scene,
        x: 0,
        y: 0,
        style: this.choiceStyle,
        choice,
      });
      this.addNode(choiceText, 0, 25);
    });
  }

  clearChoices() {
    this.destroy();
  }
}