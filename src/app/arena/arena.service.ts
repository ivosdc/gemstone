import { Injectable } from '@angular/core';
import { Stone } from '../stone/stone';

@Injectable()
export class ArenaService {

  constructor() { }
  
  public maxX = 8;
  public maxY = 8;
 
 
  public static STONES: Stone[] = [new Stone('1.png','#000000',1,1),
                                   new Stone('','#0000FF',1,1),
                                   new Stone('','#00FF00',1,1),
                                   new Stone('','#FF0000',1,1),
                                   new Stone('','#FFAA00',1,1),
                                   new Stone('','#FFFF00',1,1)];
                                 
  
public switchOptions(stone1, stone2) {
    var picture = stone1.picture;
    var color = stone1.color;
    stone1.picture = stone2.picture;
    stone1.color = stone2.color;
    stone2.picture = picture;
    stone2.color = color;
}

public isValidNeighbour(stone1, stone2) {
    var valid = false;
    if ((((stone1.x == stone2.x + 1) || (stone1.x == stone2.x - 1)) && (stone1.y == stone2.y))
            || (((stone1.y == stone2.y + 1) || (stone1.y == stone2.y - 1)) && (stone1.x == stone2.x))) {
        valid = true;
    }
    if ((stone1.x == stone2.x) 
            && (stone1.y == stone2.y)) {
        valid = false;
    }
    return valid;
}

    
    public createRandomArena() {
      let rand: number;
      const arena: Stone[] = [];
      arena.push(new Stone('1.png','#0000FF',1,1));
        for (let y = 0; y < this.maxY; y++) {
            for (let x = 0; x < this.maxX; x++) {
                rand = Math.floor(Math.random() * ArenaService.STONES.length);
                // check left
                if (arena[arena.length - 1].color === ArenaService.STONES[rand].color) {
                   rand === ArenaService.STONES.length - 1 ? rand = 1 : rand++;
                }
                // check upper
                arena.forEach(function(gemstone) {
                    if (x === gemstone.x &&
                        y - 1 === gemstone.y &&
                        ArenaService.STONES[rand].color === gemstone.color) {
                      rand === ArenaService.STONES.length - 1 ? rand = 1 : rand++;
                    }
                });
                // check left again
                if (arena[arena.length - 1].color === ArenaService.STONES[rand].color) {
                   rand === ArenaService.STONES.length - 1 ? rand = 1 : rand++;
                }
                arena.push(new Stone(ArenaService.STONES[rand].picture, ArenaService.STONES[rand].color, x, y));
            }
        }
      arena.shift();

      return arena;
    };

}
