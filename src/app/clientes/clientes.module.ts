import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ClientesListadoComponent } from './listado/listado.component';
import { ClientesRegistroComponent } from './registro/registro.component';



@NgModule({
  declarations: [
    ClientesListadoComponent,
    ClientesRegistroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    ClientesListadoComponent,
    ClientesRegistroComponent
  ]
})
export class ClientesModule { }
