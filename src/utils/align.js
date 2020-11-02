export default class Align
{
  static scaleToGameW(object, percentage, game) {
    object.displayWidth=game.scale.width*percentage;
    object.scaleY=object.scaleX;
  }

  static centerH(object, game) {
    object.x= game.scale.width/2;
  }
	
  static centerV(object, game) {
    object.y=game.scale.height/2;
  }

  static center2(object, game) {
    object.x=game.scale.width/2-object.displayWidth/2;
    object.y=game.scale.height/2-object.displayHeight/2;
  }

  static center(object, game) {
    object.x=game.scale.width/2;
    object.y=game.scale.height/2;
  }
}
