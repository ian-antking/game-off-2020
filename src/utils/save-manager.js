export default class SaveManager {
  static loadSave() {
    const saveJson = localStorage.getItem('saveGame');
    return saveJson ? JSON.parse(saveJson) : null;
  }

  static saveGame(data) {
    localStorage.setItem('saveGame', JSON.stringify(data));
  } 
}
