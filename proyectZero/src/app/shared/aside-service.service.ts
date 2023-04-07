import { Injectable,inject } from '@angular/core';
import { Games } from '../models/games.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AsideServiceService {
  public game:Games;

  constructor(private http:HttpClient, private router:Router) {
  }


  specificGame(id:number)
  {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'ca8bf21138msh023199a5221ee29p1a51dbjsn6edab4c5bf93',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    
    this.http.get<Games>(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
      .subscribe(response => {this.game = response; this.router.navigate(["/gamePage"]) });
  }
  
}
