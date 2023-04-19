import { Component } from '@angular/core';

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes = HEROES;

  // Creating optional property selectedHero. It could exist or not based on the user selection.
  selectedHero?: Hero;
  
  // Button click event listner for clicking on heroes
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
