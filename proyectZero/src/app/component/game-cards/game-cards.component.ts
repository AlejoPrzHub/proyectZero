import { Component, Input , inject} from '@angular/core';
import { Games } from './../../models/games.model'
import { HttpClient } from '@angular/common/http';
import { AsideServiceService } from 'src/app/shared/aside-service.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-game-cards',
  templateUrl: './game-cards.component.html',
  styleUrls: ['./game-cards.component.css']
})
export class GameCardsComponent {

  http = inject(HttpClient);
  @Input() games!:Games
 
  constructor(public SpecificGameService:AsideServiceService){}


  GamePage(id:number)
  {
      this.SpecificGameService.specificGame(id);
  }
}
