import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropDirectiveModule} from 'angular4-drag-drop';

import { AppComponent } from './app.component';
import { ArenaComponent } from './arena/arena.component';
import { StoneComponent } from './stone/stone.component';

@NgModule({
  declarations: [
    AppComponent,
    ArenaComponent,
    StoneComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropDirectiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
