import { Column } from 'phaser-ui-tools';
import Text from './text';

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
      const choiceText = new Text({
        scene: this.scene,
        x: 0,
        y: 0,
        style: this.choiceStyle
      })
      choiceText.update(choice.text);
      choiceText.setInteractive();

      // choiceText.on('pointerover', () => { console.log('Boom') });
      this.addNode(choiceText, 0, 8)
    })

  }
}