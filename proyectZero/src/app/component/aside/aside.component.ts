import { Component } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {

  booleano = true;
  show = true;

  swap()
  {
    this.booleano = !this.booleano
    console.log(this.booleano)
  }

  close()
  {
    this.show = !this.show
  }
}
