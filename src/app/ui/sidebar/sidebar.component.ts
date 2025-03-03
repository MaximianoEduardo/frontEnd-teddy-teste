import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {

  isActive: boolean = false;

  links = [
    {
      name: 'Home',
      path: 'dashboard',
    },
    {
      name: 'Clientes',
      path: 'dashboard',
    },
    {
      name: 'Produtos',
      path: 'dashboard',
    },
  ]

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
    this.links.map((link) => {

      if(link.name === this.router.url){
        console.log(link);
      }

    })
  }

  toggle(){
    this.isActive = !this.isActive
  }

}
