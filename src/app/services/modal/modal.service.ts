import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  // Signal para controlar a visibilidade da modal
  isModalOpen = signal(false);

  // Método para abrir a modal
  openModal() {
    console.log('mudou IsMOdal')
    this.isModalOpen.set(true);
  }

  // Método para fechar a modal
  closeModal() {
    this.isModalOpen.set(false);
  }
}