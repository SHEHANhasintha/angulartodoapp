import { Component, OnInit } from '@angular/core';
import { TimeboardComponent } from '../timeboard/timeboard.component';
import { NewtaskComponent } from '../newtask/newtask.component';

//import {MatButtonModule, MatCheckboxModule} from '@angular/material';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
	  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 2, rows: 1, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
  ];
  constructor() { }

  ngOnInit() {
  }



}
