import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './ui/header/header.component';
import { DashboardComponent } from "./features/dashboard/component/dashboard.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    HeaderComponent,
    DashboardComponent
],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'teddy';

  currentUrl: string;

  constructor(
    private router: Router
  ){
    this.currentUrl = this.router.url;

    console.log(this.currentUrl)
  }


}
