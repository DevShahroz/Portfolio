import { Component } from '@angular/core';
import { portfolio } from '../../data/portfolio.data';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
})
export class Experience {
  protected readonly data = portfolio;
}
