import { Component, OnDestroy, OnInit } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable, of, Subscription } from 'rxjs';
import { selectLoggedUser } from '../../store/user/user.selector';
import { ClientDispatchService } from '../../services/events.service';

@Component({
  selector: 'app-header',
  imports: [SidebarComponent, RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy{


  private subscription: Subscription = new Subscription();

  user$: Observable<string> = of('');

  isActive = false; // Estado inicial do sidebar (fechado)

  // Função para alternar o estado do sidebar
  toggleSidebar(): void {
    this.isActive = !this.isActive;
  }

  // Função para fechar o sidebar (opcional)
  closeSidebar(): void {
    this.isActive = false;
  }

  constructor(
    private store: Store,
    public dispatchService: ClientDispatchService
  ){}


  ngOnInit(): void {
    this.user$ = this.store.select(selectLoggedUser);
  }

  logoutUser() {
    this.subscription.add(this.user$.subscribe(name => this.dispatchService.dispatchLogoutUser(name)));
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
