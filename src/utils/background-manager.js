import Background from '../images/background';

export default class BackgroundManager {
  constructor ({ scene, backgroundNames }) {
    this.scene = scene;
    this.backgrounds = backgroundNames.map((backgroundName) => new Background(this.scene, backgroundName));
  }

  update({ background }) {
    background && this.backgrounds.forEach((backgroundObject) => {
      const action = backgroundObject.name === background ? 'show' : 'hide';
      backgroundObject.update(action);
    });
  }

  hideBackgrounds() {
    this.backgrounds.forEach((background) => background.hide());
  }
}