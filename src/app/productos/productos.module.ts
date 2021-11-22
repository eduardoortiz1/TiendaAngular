import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ProductosListadoComponent } from './listado/listado.component';
import { ProductosRegistroComponent } from './registro/registro.component';

import { ProductosService } from './servicio/productos.service'

@NgModule({
  declarations: [
    ProductosListadoComponent,
    ProductosRegistroComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    RouterModule
  ],
  providers:[
    ProductosService
  ],
  exports: [
    ProductosListadoComponent,
    ProductosRegistroComponent
  ]
})
export class ProductosModule { }
