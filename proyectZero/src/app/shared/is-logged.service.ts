import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedService {

  public isLogged:boolean

  constructor() 
  {
    this.isLogged = true;
  }
}
