import { Component, Input } from '@angular/core';
import { Games } from './../../models/games.model'
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-game-cards',
  templateUrl: './game-cards.component.html',
  styleUrls: ['./game-cards.component.css']
})
export class GameCardsComponent {

  // title: string;
  // id: number;
  // thumbnail: string;
  // short_description: string;
  // game_url: string;
  // genre: string;
  // platform: string;
  // publisher: string;
  // developer: string;
  // release_data: string;

  @Input() games!:Games 
  // = 
  // {
  //   id:0,
  //   title:'',
  //   thumbnail:'',
  //   short_description: '',
  //   game_url:'',
  //   genre:'',
  //   platform:'',
  //   publisher:'',
  //   developer:'',
  //   release_data:'',
  // }
  ;
}
