import { Component } from '@angular/core';
import { ToasterService } from '../../services/toaster/toaster.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toaster',
  imports: [CommonModule],
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css'],
})
export class ToasterComponent {
  constructor(public toasterService: ToasterService) {}
}