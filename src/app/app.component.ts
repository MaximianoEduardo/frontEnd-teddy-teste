import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './ui/header/header.component';
import { DashboardComponent } from "./features/dashboard/component/dashboard.component";
import { filter } from 'rxjs';
import { SelectedClientsComponent } from "./features/selected-clients/selected-clients.component";
import { ToasterComponent } from "./ui/toaster/toaster.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    ToasterComponent
],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'teddy';

  currentUrl: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    // Subscribe to router events to get the current URL whenever it changes
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentUrl = event.url;
      });
  }

}
