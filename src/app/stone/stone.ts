/**
 * New typescript file
 */
export class Stone {
  state = 'active';
  inSerie = [];
  width = 50;
  height = 50;
  score = 1;
  text = '';
  
  constructor(public picture: string,
              public color: string,
              public x: number,
              public y: number) {
  }
  
  public toggleState = function() {
      this.state === 'active' ? this.state = 'inactive' : this.state = 'active';
    } 

}
