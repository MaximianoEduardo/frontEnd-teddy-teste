import { Component, computed, Input, OnInit, signal } from '@angular/core';
import { ModalService } from '../../services/modal/modal.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxCurrencyDirective } from "ngx-currency";
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-modal',
  imports: [CommonModule, ReactiveFormsModule, NgxCurrencyDirective],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit{

  newClientForm!: FormGroup

  constructor(
    public modalService: ModalService , 
    private store: Store) 
  {}

  @Input()
  title: string = 'Criar Client';

  ngOnInit(): void {
    this.newClientForm = new FormGroup({
      name: new FormControl('', [
        Validators.required
      ]),
      salary: new FormControl(null, [
        Validators.required
      ]),
      company: new FormControl(null, [
        Validators.required
      ]),
    })
  }

  closeModal() {
    this.modalService.closeModal();
  }

  // Método para enviar o formulário
  onSubmit() {
    this.store.dispatch
  }

}
