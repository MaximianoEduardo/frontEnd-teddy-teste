import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { clientResponseBody } from '../../interfaces/client';
import { selectAllClientes, selectStateUpdating } from '../../store/clients/get/clients.selectos';
import { exhaustMap, map, Observable, of, shareReplay, Subscription, tap } from 'rxjs';
import { CardComponent } from "../../ui/card/card.component";
import { ModalService } from '../../services/modal/modal.service';
import { ModalComponent } from "../../ui/modal/modal.component";
import { formEnum } from '../../enum/form.enum';
import { LoadingComponent } from "../../ui/loading/loading.component";
import { allSelectedClients } from '../../store/clients/seleted/select.client.selectos';

@Component({
  selector: 'app-client-list',
  imports: [CommonModule, CardComponent, ModalComponent, LoadingComponent],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.css'
})
export class ClientListComponent implements OnInit {

  constructor(
    private store: Store,
    private modalService: ModalService
  ){}

  @Input()
  clients$: Observable<clientResponseBody[]> = of([]);
  
  $isUpdating: Observable<boolean> = of(false);
  $clientsTotal: Observable<number> | undefined = of(0);
  isLoading: boolean = true;  

  ngOnInit(): void {
    // Carrega os clientes do store

    // Atribui os observables
    this.$clientsTotal = this.clients$.pipe(
      map((clients) => clients?.length ) 
    );

    this.$isUpdating = this.store.select(selectStateUpdating).pipe(
      tap((isUpdating) => {
        this.isLoading = isUpdating;
      })
    );   
  }


  
  handleCreateClient(){
    this.modalService.openModal({
      title: 'Criar cliente',
      description: 'Criar cliente',
      type: formEnum.create
    });
  }

}
