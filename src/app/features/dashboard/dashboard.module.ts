import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './component/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { dashboardGuard } from '../../guard/dashboard/dashboard.guard';

const dashboardRoutes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [dashboardGuard] }
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
