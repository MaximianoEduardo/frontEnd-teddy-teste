import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Toast {
  message: string;
  type: 'success' | 'info' | 'error';
}

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  private toastsSubject = new BehaviorSubject<Toast[]>([]);
  toasts$ = this.toastsSubject.asObservable();

  constructor() {}

  // Método para adicionar uma nova notificação
  show(message: string, type: 'success' | 'info' | 'error') {
    const toast: Toast = { message, type };
    const currentToasts = this.toastsSubject.value;
    this.toastsSubject.next([...currentToasts, toast]);

    // Remove a notificação após 5 segundos
    setTimeout(() => this.removeToast(toast), 5000);
  }

  // Método para remover uma notificação
  removeToast(toast: Toast) {
    const currentToasts = this.toastsSubject.value.filter((t) => t !== toast);
    this.toastsSubject.next(currentToasts);
  }
}