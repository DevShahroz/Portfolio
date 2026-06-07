import { Component } from '@angular/core';
import { portfolio } from '../../data/portfolio.data';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  protected readonly data = portfolio;
}
