import { Component } from '@angular/core';
import { portfolio } from '../../data/portfolio.data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly data = portfolio;
  protected readonly year = new Date().getFullYear();
}
