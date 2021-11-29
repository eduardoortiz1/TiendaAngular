import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ClientesListadoComponent } from './listado/listado.component';
import { ClientesRegistroComponent } from './registro/registro.component';

import { ClienteService } from './servicios/cliente.service'

@NgModule({
  declarations: [
    ClientesListadoComponent,
    ClientesRegistroComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    RouterModule
  ],
  providers:[
    ClienteService
  ],
  exports: [
    ClientesListadoComponent,
    ClientesRegistroComponent
  ]
})
export class ClientesModule { }
