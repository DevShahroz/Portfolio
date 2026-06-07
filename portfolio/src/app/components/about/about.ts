import { Component } from '@angular/core';
import { portfolio } from '../../data/portfolio.data';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
})
export class About {
  protected readonly data = portfolio;
}
