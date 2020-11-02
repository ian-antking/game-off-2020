export default class AlignGrid {
  constructor({ rows, columns, height, width, scene }) {
    if (!scene)
    {
      // eslint-disable-next-line no-console
      console.log('missing scene');
      return;
    }
    this.scene = scene;
    this.rows = rows || 5;
    this.columns = columns || 5;
    this.height = height || this.scene.scale.height;
    this.width = width || this.scene.scale.width;

    //cell width
    this.cellWidth= this.width / this.columns;
    //cell height
    this.cellHeight= this.height / this.rows;
  }

  show()
  {
    this.graphics=this.scene.add.graphics();
    this.graphics.lineStyle(2,0xff0000);

    for (let column = 0; column < this.width; column += this.cellWidth) {
      this.graphics.moveTo(column, 0);
      this.graphics.lineTo(column, this.height);
    }

    for (let row = 0; row < this.height; row += this.cellHeight) {
      this.graphics.moveTo(0, row);
      this.graphics.lineTo(this.width, row);
    }
		
    this.graphics.strokePath();
  }

  placeAt(xx,yy,object)
  {
    //calc position based upon the cellwidth and cellheight
    const x2 = this.cellWidth * xx + this.cellWidth / 2;
    const y2 = this.cellHeight * yy + this.cellHeight / 2;

    object.x = x2;
    object.y = y2;
  }
  placeAtIndex(index,object)
  {
    const yy=Math.floor(index/this.columns);
    const xx=index-(yy*this.columns);

    this.placeAt(xx,yy,object);

  }
  showNumbers()
  {
    this.show();
    let count=0;
    for (let i = 0; i < this.rows; i++) {
      for(let j=0;j<this.columns;j++)
      {
        const numText=this.scene.add.text(0,0,count,{color:'#ff0000'});
        numText.setOrigin(0.5,0.5);
        this.placeAtIndex(count,numText);
        count++;
      }
    }
  }
}