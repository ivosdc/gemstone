import { Component, OnInit, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropDirectiveModule} from 'angular4-drag-drop';


import { ArenaService } from './arena.service';
import { Stone } from '../stone/stone';

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.css'],
  providers: [ArenaService]
})
export class ArenaComponent implements OnInit {
  title = "Arena";
  stones = [];
  arenawidth = 0;
  arenaheight = 0;
  dragStone: Stone;
  score = 0;
  round = 0;
  seriePattern =  {x: [['x=x+1'],['x=x+2']],
                   y: [['y=y+1'],['y=y+2']],
                   cube:[['x=x+1'], ['y=y+1'],['x=x+1', 'y=y+1']]};
 
  constructor(private _arenaService: ArenaService) {
  }

  ngOnInit() {
    this.stones = this._arenaService.createRandomArena();
    this.arenawidth = this.stones[0].width * this._arenaService.maxX;
    this.arenaheight = this.stones[0].height * this._arenaService.maxY;
  }
 

  //DragDrop
  // starts dragging the item
  private startDrag(event, item){
      this.dragStone = item;
      for (let i in this.stones) {
          this.stones[i].state = 'active';
          this.stones[i].inSerie = [];
          this.stones[i].text = '';
      }
      this.dragStone.state = 'inactive';
    }
  
  // passes the dropped item when an item is dropped into the drop element
  private addDropItem(event, item){
      if (this._arenaService.isValidNeighbour(this.dragStone, item)){
          this._arenaService.switchOptions(item,this.dragStone);
          this.round++;
          while(this.checkSeriePattern()) {
             this.clearStones();
          }
      }
  }
  
  //act on the dragged item once it is dropped into the drop area    
  private releaseDrop(event, item){
  }
  
  //passes the dragged item when an item is dragged into the drop element
  private dragenterEvent(event, item) {
      if (this._arenaService.isValidNeighbour(this.dragStone, item)){
          item.state = 'inactive';
       }
  }
   
  // passes the dragged item when the item is dragged out of the drop element.
  private dragleaveEvent(event, item) {
      if (this._arenaService.isValidNeighbour(this.dragStone, item)){
          item.state = 'active';
      }
  }
  
  // This fires ever 350 millieseconds when an object is being dragged over the droppable box.
  // It passes the dragover event
  private dragoverMouse(event, item) {
      if (this._arenaService.isValidNeighbour(this.dragStone, item)){
          item.state = 'inactive';
       }
  }

  
   // Game - Series
  
   private clearStones() {
       var log = '';

       var color = '';
       var picture = '';
       var rand = 0;
       var item:Stone;
       for (var y = 0; y < this._arenaService.maxY; y++) {
           for (var x = 0; x < this._arenaService.maxX; x++) {
               if (this.getStone(x, y).inSerie.length > 0) {
                   log = log + x + ':' + y + '; ';
                   this.getStone(x, y).inSerie = [];
                   this.getStone(x, y).state = 'serie';
                   for (var serie = y; serie > 0; serie--) {
                       color = this.getStone(x, serie - 1).color;
                       picture = this.getStone(x, serie - 1).picture;
                       item = this.getStone(x, serie);
                       if (item.state != 'serie') {
                          item.state = 'movedown';
                       }
                       item.color = color;
                       item.picture = picture;
                   }
                   rand = Math.floor(Math.random() * ArenaService.STONES.length);
                   color = ArenaService.STONES[rand].color;
                   picture = ArenaService.STONES[rand].picture;
                   item = this.getStone(x, 0);
                   if (item.state != 'serie') {
                       item.state = 'movedown';
                   }
                   item.color = color;
                   item.picture = picture;
               }
           }
       }
   }
   
   private checkSeriePattern(){
       var serie = false;
       var check = false;
       var key = '';
       for (var y = 0; y < this._arenaService.maxY; y++) {
           for (var x = 0; x < this._arenaService.maxX; x++) {
               for (key in this.seriePattern) {
                   check = this.checkPattern(key, x, y);
                   serie = serie || check;
               }
           }
       }
       return serie;
   }

   // sets the name parameter in Stone-object.inSerie if it is in a serie
   private checkPattern(name, x, y){
       var matches = this.seriePattern[name];
       var color = this.getStone(x, y).color;
       var check = true;
       var initX = x;
       var initY = y;
       for (var pattern = 0; pattern < matches.length; pattern++) {
           x = initX;
           y = initY;
           eval(matches[pattern][0]);
           if (matches[pattern][1] !== undefined) {
           eval(matches[pattern][1]);
           }
           if (x < this._arenaService.maxX && y < this._arenaService.maxY) {
               if (this.getStone(x, y).color != color){
                   check = false;
               }
           } else {
               check = false;
           }
       }
       if (check) {
           if (this.getStone(initX, initY).inSerie.indexOf(name) === -1) {
               this.getStone(initX, initY).inSerie.push(name);
               this.score = this.score + this.getStone(initX, initY).score;
           }
           for (var pattern = 0; pattern < matches.length; pattern++) {
               x = initX;
               y = initY;
               eval(matches[pattern][0]);
               if (matches[pattern][1] !== undefined) {
                   eval(matches[pattern][1]);
               }
               if (this.getStone(x, y).inSerie.indexOf(name) === -1) {
                   this.getStone(x, y).inSerie.push(name);
                   this.score = this.score + this.getStone(x, y).score;
               }
           }
       }
       return check;
   }

   private getStone <Stone> (x, y) {
       return this.stones[x + (this._arenaService.maxX * y)];
   }
}
