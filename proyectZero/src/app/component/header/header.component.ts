import { Component } from '@angular/core';
import { IsLoggedService } from '../../shared/is-logged.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  booleano = true;
  tab = 0;

  constructor(public isLoggedService :IsLoggedService, private router:Router )
  {}

  swap()
  {
    this.booleano = !this.booleano
    console.log(this.booleano)
  }

  signOff()
  {
    this.isLoggedService.isLogged = !this.isLoggedService.isLogged;
  }
}
