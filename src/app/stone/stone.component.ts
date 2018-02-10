import { Component, OnInit, Input } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
                 transition('inactive => active', animate('100ms ease-in')),
                 transition('active => inactive', animate('100ms ease-out'))
               ])
               ]
})

export class StoneComponent implements OnInit {
    @Input() model: Stone;
        
    constructor() {
    }

  ngOnInit() {
  }
}
