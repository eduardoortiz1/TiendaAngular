import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesListadoComponent } from './listado/listado.component';
import { ClientesRegistroComponent } from './registro/registro.component';



@NgModule({
  declarations: [
    ClientesListadoComponent,
    ClientesRegistroComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ClientesListadoComponent,
    ClientesRegistroComponent
  ]
})
export class ClientesModule { }
