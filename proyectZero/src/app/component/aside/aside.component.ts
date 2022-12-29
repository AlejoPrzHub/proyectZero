import { Component } from '@angular/core';
import { AsideServiceService } from '../../shared/aside-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {

  constructor(public asideService :AsideServiceService, private router:Router )
  {}
  booleano = true;
  show = true;

  swap()
  {
    this.booleano = !this.booleano
    console.log(this.booleano)
  }

  open()
  {
    this.show = !this.show
    this.asideService.isExtend = !this.asideService.isExtend
    console.log(this.asideService);
  }
}
