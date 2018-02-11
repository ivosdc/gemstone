/**
 * New typescript file
 */
export class Stone {
  state = 'active';
  inSerie = [];
  width = 60;
  height = 60;
  score = 1;
  text = '';
  
  constructor(public picture: string,
              public color: string,
              public x: number,
              public y: number) {
  }
  
}
