import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsideServiceService {
  public isExtend:boolean

  constructor() 
  {
    this.isExtend = true;
  }
}
