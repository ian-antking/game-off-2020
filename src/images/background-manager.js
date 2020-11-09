import Background from './background';

export default class BackgroundManager {
  constructor ({ scene, backgroundNames }) {
    this.scene = scene;
    this.backgrounds = backgroundNames.map((backgroundName) => new Background(this.scene, backgroundName));
  }

  update({ background }) {
    this.backgrounds.forEach((backgroundObject) => {
      const action = backgroundObject.name === background ? 'show' : 'hide';
      backgroundObject.update(action);
    });
  }
}