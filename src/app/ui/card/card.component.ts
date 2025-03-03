import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { clientResponseBody } from '../../interfaces/client';
import { ModalService } from '../../services/modal/modal.service';
import { formType } from '../../interfaces/forms';
import { formEnum } from '../../enum/form.enum';
import { LoadingComponent } from "../loading/loading.component";
import { ClientDispatchService } from '../../services/events.service';
import { map, Observable, of } from 'rxjs';
import { ToasterService } from '../../services/toaster/toaster.service';

@Component({
  selector: 'app-card',
  imports: [CommonModule, CurrencyPipe, LoadingComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{

  isOnlist$: Observable<boolean> = of(false)

  @Input()
  isUpdating: boolean = false;

  @Input()
  client: clientResponseBody = {
    id: 0,
    name: '',
    salary: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
    companyValuation: 0
  }

  deleteModal: formType = {
    title: '',
    id: 0,
    description: '',
    type: formEnum.create
  };

  editModal: formType = {
    title: '',
    description: '',
    type: formEnum.edit
  }

  ngOnInit(): void {


    this.deleteModal = {
      title: 'Excluir cliente',
      nameOfClient: this.client.name,
      description: 'Você está prestes a excluir o cliente: ',
      id: this.client.id,
      type: formEnum.delete
    };
    this.editModal = {
      title: 'Editar cliente',
      description: 'Editar cliente',
      id: this.client.id,
      type: formEnum.edit
    }

    this.isOnSelectedList(this.client);

  }

  
  handleClickSelectClient(payload: clientResponseBody){
    this.toasterService.show(`Cliente ${payload.name} adicionado com sucesso!`, 'success');
    this.dispatchService.dispatchSelectClient(payload);
    
  }

  handleRemoveSelectClient(client: clientResponseBody){
    this.toasterService.show(`Cliente ${client.name} removido com sucesso!`, 'info');
    this.dispatchService.dispatchRemoveSelectClient(client)
  }



  isOnSelectedList(client: clientResponseBody): Observable<boolean>{

   return this.isOnlist$ = this.dispatchService.dispatchGetAllSelectsClients().pipe(
      map((clients) => {
        
        return clients.some(selectedClient => selectedClient.id === client.id);        

      })
    );
  }




  constructor(
    public modalService: ModalService,
    public dispatchService: ClientDispatchService,
    public toasterService: ToasterService
  ){}
}
