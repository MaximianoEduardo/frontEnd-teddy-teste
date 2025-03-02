import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ClientDispatchService } from '../../../services/events.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  profileForm!: FormGroup;

  constructor(
    private router: Router,
    public dispatchService: ClientDispatchService
  ){}


  ngOnInit(): void {
    this.profileForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
      ]),
    });
  }


  onSubmit(){
    this.profileForm.markAllAsTouched();
    if (this.profileForm.valid) {
      this.dispatchService.dispatchGetAllClients(1, 16, true );
      this.router.navigate(['/dashboard'])
    }
  }

  get name() {
    return this.profileForm.get('name');
  }

}
