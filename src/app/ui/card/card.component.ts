import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { clientResponseBody } from '../../interfaces/client';

@Component({
  selector: 'app-card',
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input()
  client: clientResponseBody = {
    
    id: 0,
    name: '',
    salary: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
    companyValuation: 0
  }

}
