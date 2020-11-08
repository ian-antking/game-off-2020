import { Row } from 'phaser-ui-tools';
import ChoiceBox from './choice-box';
import DialogueBox from './dialogue-box';

export default class UiBar extends Row {
  constructor(scene) {
    super(scene, 0, 0);
    this.scene = scene;

    this.setSize(this.scene.scale.width, this.scene.scale.height * 0.6);

    this.dialogueBox = new DialogueBox({ scene, x:-325, y:-20 });

    this.addNode(this.dialogueBox, 0, 0);
  }

  removeChoices() {
    this.choiceBox.clearChoices();
    this.choiceBox = null;
  }

  update(data) {
    this.dialogueBox.update(data);

    if (data.choices.length && !this.choiceBox) {
      this.choiceBox = new ChoiceBox({ scene: this.scene, x: 0, y: 0, choices: data.choices });
      this.addNode(this.choiceBox, 390, 0);
    }
  }
}