import { Row } from 'phaser-ui-tools';
import DialogueBox from './dialogue-box';

export default class UiBar extends Row {
  constructor(scene) {
    super(scene, 0, 0);
    this.scene = scene;

    this.setSize(this.scene.scale.width, this.scene.scale.height * 0.6);

    this.dialogueBox = new DialogueBox({scene, x:-300, y:0});

    this.addNode(this.dialogueBox, 100, 0)
  }

  update(data) {
    this.dialogueBox.update(data);
  }
}