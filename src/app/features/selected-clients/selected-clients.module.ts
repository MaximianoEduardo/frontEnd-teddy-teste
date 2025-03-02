import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SelectedClientsComponent } from './selected-clients.component';

const dashboardSelectedRoutes: Routes = [
  { path: '', component: SelectedClientsComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardSelectedRoutes)
  ]
})
export class SelectedClientsModule { }
