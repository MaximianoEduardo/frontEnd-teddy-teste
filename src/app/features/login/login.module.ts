import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login.component';

const loginRoutes: Routes = [
  { path: '', component: LoginComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginComponent,
    RouterModule.forChild(loginRoutes)
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
