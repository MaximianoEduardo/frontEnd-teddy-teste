import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './component/dashboard.component';
import { RouterModule, Routes } from '@angular/router';


const dashboardRoutes: Routes = [
  { path: '', component: DashboardComponent }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardComponent,
    RouterModule.forChild(dashboardRoutes)
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
