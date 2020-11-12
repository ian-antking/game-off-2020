import Character from '../sprites/character';

export default class CharacterManager {
  constructor({ scene, characters }) {
    this.scene = scene;
    this.characters = characters.map(({ name }) => new Character({
      name,
      scene: this.scene,
      x: this.scene.scale.width * 0.7,
      y: this.scene.scale.height/2,
    }));
  }

  update(data) {
    this.characters.forEach((character) => character.update(data));
  }

  hideCharacters() {
    this.characters.forEach((character) => character.hide());
  }
}