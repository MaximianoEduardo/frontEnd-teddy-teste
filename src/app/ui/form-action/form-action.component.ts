import { Component, Input, OnDestroy, OnInit, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { formType } from '../../interfaces/forms';
import { CommonModule } from '@angular/common';
import { NgxCurrencyDirective } from 'ngx-currency';
import { formEnum } from '../../enum/form.enum';
import { Store } from '@ngrx/store';
import { ModalService } from '../../services/modal/modal.service';
import { createClient } from '../../store/clients/create/create.client.actions';
import { deleteClient } from '../../store/clients/delete/delete.client.actions';
import { editClient } from '../../store/clients/edit/edit.client.actions';
import { selectClient } from '../../store/clients/edit/edit.client.selectos';
import { Subscription } from 'rxjs';
import { selectClientById } from '../../store/clients/get/clients.selectos';
import { ToasterService } from '../../services/toaster/toaster.service';



@Component({
  selector: 'app-form-action',
  imports: [CommonModule, ReactiveFormsModule, NgxCurrencyDirective],
  templateUrl: './form-action.component.html',
  styleUrl: './form-action.component.css'
})
export class FormActionComponent implements OnInit, OnDestroy {

  clientForm!: FormGroup;

  formCreate: string = formEnum.create;
  formDelete: string = formEnum.delete;
  formEdit  : string = formEnum.edit;

  @Input()
  type!: WritableSignal<formType>;

  private clientSubscription!: Subscription

  constructor(
      public modalService: ModalService, 
      private store: Store,
      public toasterService: ToasterService
  ) 
  {}

  ngOnInit(): void {

      
      this.clientForm = new FormGroup({
        name: new FormControl('', [
          Validators.required
        ]),
        salary: new FormControl(null, [
          Validators.required
        ]),
        companyValuation: new FormControl(null, [
          Validators.required
        ]),
      });

      if (this.type().type === formEnum.edit) {
        this.clientSubscription = this.store.select(selectClientById(this.type().id!)).subscribe(client => {
          if (client) {
            this.clientForm.patchValue({
              name: client.name,
              salary: client.salary,
              companyValuation: client.companyValuation
            });
          }
        });
      }
    }

  onSubmit(type: string) {

    if (type !== formEnum.delete && !this.clientForm.valid) {
      this.markFormControlsAsTouched();
      return;
    }
  
    const clientData = this.clientForm.value;
  
    switch (type) {
      case formEnum.create:
        this.store.dispatch(createClient({ payload: clientData }));
        this.toasterService.show('Aguarde um momento estamos criando o cliente novo', 'info');
        break;
      case formEnum.edit:
        this.store.dispatch(editClient({ id: this.type().id! , payload: clientData }));
        this.toasterService.show('Aguarde um momento estamos alterando dados do cliente', 'info');
        break;
      case formEnum.delete:
        this.store.dispatch(deleteClient({ id: this.type().id! }));
        this.toasterService.show('Estamos deletando o cliente!', 'error');
        break;
      default:
        console.warn(`Tipo de ação desconhecido: ${type}`);
        return;
    }

    this.closeModal();
  
  }

  closeModal() {
    this.modalService.closeModal();
  }


  private markFormControlsAsTouched() {
    Object.keys(this.clientForm.controls).forEach(field => {
      this.clientForm.get(field)?.markAsTouched({ onlySelf: true });
    });
  }


  ngOnDestroy(): void {
    if (this.clientSubscription) {
      this.clientSubscription.unsubscribe();
    }
  }
  

}
