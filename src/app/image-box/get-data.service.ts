import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor() { }
  getCharacters(){
    return [
      {
        name: 'Mad Kitty',
        planet: 'Earth'
      },
      {
        name: 'Billy',
        planet: 'Earth'
      },
      {
        name: 'Cindy',
        planet: 'Earth'
      }
    ];
  }
}
