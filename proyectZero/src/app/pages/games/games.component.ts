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
  selectedCheckboxes: string[] = [];
  searchWord:string;
  checkboxValues:any;
  GamesTags:string[] = ['2d','3d','Action','Anime','Card','Fantasy','Fighting','First Person View','Flight','MMORPG','Martial Arts','Military','Moba','Open World','Permadeath','Pixel','Racing','Sci-Fi','Shooter','Social','Space','Sports','Strategy','Superhero','Survival','Tank','Third Person View','Zombie']
  constructor(){
    this.fetchGames()
  }
  fetchGames(){
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'ca8bf21138msh023199a5221ee29p1a51dbjsn6edab4c5bf93',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    this.http.get<Games[]>('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc', options)
    .subscribe(response => {this.games = response})

    this.CleanCheckboxes()

  }

  CleanCheckboxes()
    {
     this.selectedCheckboxes = [];

     for (const key in this.checkboxValues) {
      this.checkboxValues[key] = false;}
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

  onCheckboxChange(event:any)
  {
    if(event.target.checked)
    {
      this.selectedCheckboxes.push(event.target.name) ;
    }
    else 
    {
      const index = this.selectedCheckboxes.indexOf(event.target.name)
      if(index > -1){this.selectedCheckboxes.splice(index,1)} ; 
    }
    this.PrintByTag(this.selectedCheckboxes)
  }

  PrintByTag(selectedCheckboxes:string[])
  {

    const tags = selectedCheckboxes.join('.');
    const platform = 'pc';

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'ca8bf21138msh023199a5221ee29p1a51dbjsn6edab4c5bf93',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    if(selectedCheckboxes.length == 0)
    {
      this.fetchGames()
    }
    if(selectedCheckboxes.length == 1)
    {
      this.http.get<Games[]>(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${selectedCheckboxes[0]}`, options)
      .subscribe(response => {this.games = response})
    }
    else
    {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'ca8bf21138msh023199a5221ee29p1a51dbjsn6edab4c5bf93',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }}

      this.http.get<Games[]>(`https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=${tags}&platform=${platform}`, options)
      .subscribe(response => {this.games = response})

    }
  }
  }
 


