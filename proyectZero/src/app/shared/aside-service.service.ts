import { Injectable } from '@angular/core';
import { Games } from '../models/games.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AsideServiceService {
  private url:String;
  public gamesService:Games[];

  constructor(private http:HttpClient) {}

  
}
