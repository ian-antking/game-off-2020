import { Column } from 'phaser-ui-tools';
import Text from './text';

export default class DialogueBox extends Column {
  constructor({ scene, x, y }) {
    super(scene, x, y);
    this.scene = scene;

    this.dialogueStyle = {
      color: '#ffffff',
      align: 'left',
      fontSize: '12pt',
      fontFamily: 'Play',
      wordWrap:
      {
        width: scene.scale.width * 0.5,
        useAdvancedWrap: true 
      }
    };

    this.nameTagStyle = {
      color: '#ffffff',
      align: 'left',
      fontSize: '12pt',
      fontFamily: 'Play',
    };

    this.nameTag = new Text({ scene: this.scene, x: 0, y: 0, style: this.nameTagStyle });
    this.dialogue = new Text({ scene: this.scene, x: 0, y: 0, style: this.dialogueStyle });

    this.addNode(this.nameTag, 0, 25);
    this.addNode(this.dialogue, 0, 25);

  }

  update({ text, data }) {
    if ( data.hide ) {
      this.dialogue.hide();
    } else {
      this.dialogue.show();
    }
    this.dialogue.update(text, !!text);
    data.name ? this.nameTag.update(`${data.name}:`) : this.nameTag.update('');
  }
}
