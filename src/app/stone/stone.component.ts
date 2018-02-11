import { Component, OnInit, Input } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimationTransitionEvent } from "@angular/core";
import { Stone } from './stone';

import {
    trigger,
    state,
    style,
    animate,
    transition
  } from '@angular/animations';

@Component({
  selector: 'stone',
  templateUrl: './stone.component.html',
  styleUrls: ['./stone.component.css'],
  animations: [
               trigger('stoneState', [
                 state('inactive', style({
                   transform: 'scale(0.7)'
                 })),
                 state('active',   style({
                   transform: 'scale(1)'
                 })),
                 state('movedown', style({transform: 'translateX(0)'})),
                 transition('* => active', animate('100ms ease-in')),
                 transition('* => inactive', animate('100ms ease-out')),
                 transition('* => movedown', [style({transform: 'translateY(-100%)'}),
                                              animate(200)]),
                 transition('* => serie', [style({transform: 'scale(2)', backgroundColor: 'white'}),
                                              animate(300)])

               ])
              ]
})

export class StoneComponent implements OnInit {
    @Input() model: Stone;
        
    constructor() {
    }

  ngOnInit() {
  }
  
  animationStarted(event: AnimationTransitionEvent) {
  }

  animationDone(event: AnimationTransitionEvent): void  {
      if ( ( this.model.state !== event.toState ) && ( this.model.state === "inactive" ) ) {
          this.model.state = event.toState;
      }
      if ( ( this.model.state === 'serie' ) && ( event.toState === "movedown" ) ) {
          event.toState = 'serie';
      }
      if ( ( this.model.state === 'movedown' ) && ( event.toState === "serie" ) ) {
          this.model.state = 'serie';
      }
  }
}
