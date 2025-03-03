import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SelectedClientsComponent } from './selected-clients.component';
import { clientsSelectsGuard } from '../../guard/clients-selects/clients-selects.guard';

const dashboardSelectedRoutes: Routes = [
  { path: '', component: SelectedClientsComponent, canActivate: [clientsSelectsGuard] }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardSelectedRoutes)
  ]
})
export class SelectedClientsModule { }
