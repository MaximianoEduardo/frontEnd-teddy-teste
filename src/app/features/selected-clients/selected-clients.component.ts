import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../ui/header/header.component";
import { ClientListComponent } from "../client-list/client-list.component";
import { Store } from '@ngrx/store';
import { map, Observable, of } from 'rxjs';
import { clientResponseBody } from '../../interfaces/client';
import { allSelectedClients } from '../../store/clients/seleted/select.client.selectos';
import { ClientDispatchService } from '../../services/events.service';

@Component({
  selector: 'app-selected-clients',
  imports: [CommonModule, HeaderComponent, ClientListComponent],
  templateUrl: './selected-clients.component.html',
  styleUrl: './selected-clients.component.css'
})
export class SelectedClientsComponent implements OnInit{
  constructor(
      private store: Store,
      public dispatchService: ClientDispatchService
    ){}

    clientsFromStore$: Observable<clientResponseBody[]> = of([]);

    ngOnInit(): void {
      this.clientsFromStore$ = this.dispatchService.dispatchGetAllSelectsClients();

      console.log(this.clientsFromStore$)

    }

}
