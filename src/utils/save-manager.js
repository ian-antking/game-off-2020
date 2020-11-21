export default class SaveManager {
  static loadSave() {
    return JSON.parse(localStorage.getItem('saveGame'));
  }

  static saveGame(data) {
    localStorage.setItem('saveGame', JSON.stringify(data));
  } 
}
