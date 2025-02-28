import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { formType } from '../../interfaces/forms';
import { formEnum } from '../../enum/form.enum';

@Injectable({
  providedIn: 'root',
})
export class ModalService {

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
  }

  // Método para fechar a modal
  closeModal() {
    this.isModalOpen.set(false);
  }
}