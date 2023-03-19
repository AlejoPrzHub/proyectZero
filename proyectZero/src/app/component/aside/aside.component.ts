import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {

  constructor( private router:Router )
  {}
  booleano = true;
  show = true;

  swap()
  {
    this.booleano = !this.booleano
    console.log(this.booleano)
  }

  
}
