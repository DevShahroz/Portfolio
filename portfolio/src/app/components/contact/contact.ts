import { Component } from '@angular/core';
import { portfolio } from '../../data/portfolio.data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  protected readonly data = portfolio;
}
