import { Component } from '@angular/core';
import { AsideServiceService } from 'src/app/shared/aside-service.service';
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {

  constructor(public asideService :AsideServiceService){}

}
