import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ClientActions from '../../../store/clients/clients.actions';
import { ClientListComponent } from "../../client-list/client-list.component";

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, ClientListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  constructor(
    private store: Store
  ){}

  ngOnInit(): void {
    this.store.dispatch(ClientActions.getAllClients({page: 1, limit: 16}))
  }

}
