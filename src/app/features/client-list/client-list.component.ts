import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { clientResponseBody } from '../../interfaces/client';
import { selectAllClientes } from '../../store/clients/clients.selectos';
import { exhaustMap, Observable, of, shareReplay } from 'rxjs';
import { CardComponent } from "../../ui/card/card.component";

@Component({
  selector: 'app-client-list',
  imports: [CommonModule, CardComponent],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.css'
})
export class ClientListComponent implements OnInit{

  constructor(
    private store: Store
  ){}

  $clients: Observable<clientResponseBody[]> = of([]);
  $clientsTotal: Observable<number> = of(0);


  ngOnInit(): void {
    this.$clients = this.store.select(selectAllClientes).pipe(
      shareReplay(1)
    );


    this.$clientsTotal = this.store.select(selectAllClientes).pipe(
      shareReplay(1),
      exhaustMap(async (client) => client?.length )
    );
  }

}
