import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ClientActions from '../../../store/clients/get/clients.actions';
import { ClientListComponent } from "../../client-list/client-list.component";
import { ToasterComponent } from "../../../ui/toaster/toaster.component";

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, ClientListComponent, ToasterComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  constructor(
    private store: Store
  ){}

  ngOnInit(): void {
    this.store.dispatch(ClientActions.getAllClients({page: 1, limit: 35 , isloading: false}));
  }

}
