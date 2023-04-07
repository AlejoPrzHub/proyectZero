import { Pipe, PipeTransform } from '@angular/core';
import { Games } from '../models/games.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Games[], title = ''): Games[] 
  { 
    if (title == '') return value
    else return value.filter(game => game.title.includes(title));
  }
}
