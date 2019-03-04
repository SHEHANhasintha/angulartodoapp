import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { PeriodComponent } from './period/period.component';
import { NewtaskComponent } from './newtask/newtask.component';
import { CreatedtaskComponent } from './createdtask/createdtask.component';
import { TimeboardComponent } from './timeboard/timeboard.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatSliderModule} from '@angular/material/slider';
import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';



@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    PeriodComponent,
    NewtaskComponent,
    CreatedtaskComponent,
    TimeboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    [MatButtonModule, MatCheckboxModule],
    MatSliderModule,
    MatChipsModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
