import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  profileForm!: FormGroup;

  constructor(
    private router: Router
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
      this.router.navigateByUrl('/dasboard')
    } else {
      console.log(this.profileForm)
      console.log('Form is not valid');
    }


  }

  get name() {
    return this.profileForm.get('name');
  }

}
