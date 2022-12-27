import { Component } from '@angular/core';

@Component({
  selector: 'app-game-cards',
  templateUrl: './game-cards.component.html',
  styleUrls: ['./game-cards.component.css']
})
export class GameCardsComponent {

  flipped= true

  flip()
  {
    this.flipped = !this.flipped
    console.log(this.flipped)
  }
}
