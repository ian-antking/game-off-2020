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
    this.height = height || scene.scale.height;
    this.width = width || this.scene.scale.width;

    //cell width
    this.cw=width/columns;
    //cell height
    this.ch=height/rows;
  }

  show()
  {
    this.graphics=this.scene.add.graphics();
    this.graphics.lineStyle(2,0xff0000);

    for (let i = 0; i < this.config.width; i+=this.cw) {
      this.graphics.moveTo(i,0);
      this.graphics.lineTo(i,this.config.height);
    }

    for (let i = 0; i < this.config.height; i+=this.ch) {
      this.graphics.moveTo(0,i);
      this.graphics.lineTo(this.config.width,i);
    }
		
    this.graphics.strokePath();
  }

  placeAt(xx,yy,object)
  {
    //calc position based upon the cellwidth and cellheight
    const x2=this.cw*xx+this.cw/2;
    const y2=this.ch*yy+this.ch/2;

    object.x=x2;
    object.y=y2;
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