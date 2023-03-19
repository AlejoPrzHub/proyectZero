import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Games } from '../../models/games.model';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {

  http = inject(HttpClient);
  games:Games[] = [];
  searchWord:string;
  GamesTags:string[] = ['2d','3d','Action','Anime','Card','Fantasy','Fighting','First Person View','Flight','MMORPG','Martial Arts','Military','Moba','Open World','Permadeath','Pixel','Racing','Sci-Fi','Shooter','Social','Space','Sports','Strategy','Superhero','Survival','Tank','Third Person View','Zombie']
  
  constructor(){}
  ngOnInit()
   {
    const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ca8bf21138msh023199a5221ee29p1a51dbjsn6edab4c5bf93',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
  
  this.http.get<Games[]>('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc', options)
    .subscribe(response => {this.games = response})
    
    }
  
  SortGamesByAlphabet()
  {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'ca8bf21138msh023199a5221ee29p1a51dbjsn6edab4c5bf93',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    
    this.http.get<Games[]>('https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=alphabetical', options)
    .subscribe(response => {this.games = response})
  }

  Search(value:string)
  {
    this.searchWord = value
  }


  }
 


