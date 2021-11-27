import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicio/productos.service'
import { Producto } from '../modelo/producto'
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'productos-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ProductosListadoComponent implements OnInit {

  idProductoEliminar:string|null = null
  nombreProductoEliminar:string = ""
  nombreProductoBuscar:string = ""

  page:number = 1;
  pageSize:number = 3;
  collectionSize:number = 0;

  productos:Producto[] = [];

  constructor(private productosSvc:ProductosService, private router:Router) { }

  ngOnInit(): void {  
    this.cargarProductos()
  }

  cargarProductos() {
    console.log(this.nombreProductoBuscar)
    this.productosSvc.getProductos().subscribe(data=>{
      const prodsTemp:Producto[] = data
      this.productos = prodsTemp.filter(prod=>prod.nombre.includes(this.nombreProductoBuscar))
    },
    err=>{console.log(err)}
    )
    this.collectionSize = this.productos.length
  }
  
  setProductoEliminar(id:string|null, nombre:string) {
    this.idProductoEliminar = id==''? null : id
    this.nombreProductoEliminar = nombre
  }

  eliminarProducto() {
    if (this.idProductoEliminar!=null) {
      this.productosSvc.eliminarProducto(this.idProductoEliminar).subscribe(data=>{
        console.log('El producto fue eliminado con exito!');
        this.cargarProductos()
      }, error => {
        console.log(error);
      })
    }
  }
}
