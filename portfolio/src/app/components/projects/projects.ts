import { Component } from '@angular/core';
import { portfolio } from '../../data/portfolio.data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
})
export class Projects {
  protected readonly data = portfolio;
}
