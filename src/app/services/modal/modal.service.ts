import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { formType } from '../../interfaces/forms';
import { formEnum } from '../../enum/form.enum';
import { Store } from '@ngrx/store';
import { selectClient } from '../../store/clients/edit/edit.client.selectos';

@Injectable({
  providedIn: 'root',
})
export class ModalService {

  constructor(
    private store: Store
  ){}

  // Signal para controlar a visibilidade da modal
  isModalOpen = signal(false);
  form: WritableSignal<formType> = signal({
    title: '',
    description: '',
    type: formEnum.create
  });

  // Método para abrir a modal
  openModal(type: formType) {
    this.isModalOpen.set(true);
    this.form.set(type);

    if(type.type === formEnum.edit){
      this.store.select(selectClient)
    }
  }

  // Método para fechar a modal
  closeModal() {
    this.isModalOpen.set(false);
  }
}