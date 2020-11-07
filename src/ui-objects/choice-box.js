import { Column } from 'phaser-ui-tools';
import Choice from './choice';

export default class ChoiceBox extends Column {
  constructor({ scene, x, y, choices }) {
    super(scene, x, y)
    this.scene = scene;

    this.choiceStyle = {
      color: '#ffffff',
      align: 'center',
      font: '12pt future-thin',
    };

    choices.forEach(choice => {
      const choiceText = new Choice({
        scene: this.scene,
        x: 0,
        y: 0,
        style: this.choiceStyle,
        choice,
      })
      this.addNode(choiceText, 0, 8)
    })

  }
}