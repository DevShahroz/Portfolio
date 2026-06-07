import { Component } from '@angular/core';
import { portfolio } from '../../data/portfolio.data';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
})
export class Skills {
  protected readonly data = portfolio;
}
