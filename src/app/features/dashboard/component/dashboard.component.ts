import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ClientListComponent } from "../../client-list/client-list.component";
import { ToasterComponent } from "../../../ui/toaster/toaster.component";
import { HeaderComponent } from "../../../ui/header/header.component";
import { Observable, of, map } from 'rxjs';
import { clientResponseBody } from '../../../interfaces/client';
import { selectAllClientes } from '../../../store/clients/get/clients.selectos';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, ClientListComponent, ToasterComponent, HeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  constructor(
    private store: Store
  ){}

  clientsFromStore$: Observable<clientResponseBody[]> = of([]);
  
  ngOnInit(): void {
    this.clientsFromStore$ = this.store.select(selectAllClientes).pipe(
      map((clients) => clients)
    );
  }


}
