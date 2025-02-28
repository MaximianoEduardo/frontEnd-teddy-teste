import { Component } from '@angular/core';
import { ModalService } from '../../services/modal/modal.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormActionComponent } from "../form-action/form-action.component";

@Component({
  selector: 'app-modal',
  imports: [CommonModule, ReactiveFormsModule, FormActionComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  newClientForm!: FormGroup

  constructor(
    public modalService: ModalService) 
  {}

  closeModal() {
    this.modalService.closeModal();
  }

}
