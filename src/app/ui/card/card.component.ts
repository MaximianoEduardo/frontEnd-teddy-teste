import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { clientResponseBody } from '../../interfaces/client';
import { ModalService } from '../../services/modal/modal.service';
import { formType } from '../../interfaces/forms';
import { formEnum } from '../../enum/form.enum';
import { LoadingComponent } from "../loading/loading.component";

@Component({
  selector: 'app-card',
  imports: [CommonModule, CurrencyPipe, LoadingComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

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

  }

  constructor(
    public modalService: ModalService
  ){}
}
