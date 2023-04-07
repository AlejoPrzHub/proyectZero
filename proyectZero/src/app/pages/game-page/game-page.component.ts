import { Component,inject, OnInit } from '@angular/core';
import { Games } from 'src/app/models/games.model';
import { AsideServiceService } from 'src/app/shared/aside-service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent {

  http = inject(HttpClient);
  specificgame = this.SpecificGameService.game;
  constructor(public SpecificGameService:AsideServiceService,private router:Router){
    if(!SpecificGameService.game) router.navigate(['/home'])
  }

  redirect()
  {
   window.location.href= this.specificgame.game_url.valueOf();
  }

  }
