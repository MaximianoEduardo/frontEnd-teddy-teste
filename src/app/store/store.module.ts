import { NgModule } from '@angular/core';
import { ClientsService } from '../services/clients.service';
  
@NgModule({
  imports: [
  ],
  providers: [
    ClientsService,
  ]
})
export class CustomStoreModule {}