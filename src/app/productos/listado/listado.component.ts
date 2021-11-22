import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicio/productos.service'
import { Producto } from '../modelo/producto'
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'productos-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ProductosListadoComponent implements OnInit {

  idProductoEliminar:string|null = null
  nombreProductoEliminar:string = ""

  page:number = 1;
  pageSize:number = 10;
  collectionSize:number = 0;

  productos:Producto[] = [];

  constructor(private productosSvc:ProductosService, private router:Router) { }

  ngOnInit(): void {  
    this.cargarProductos()
  }

  cargarProductos() {
    this.productosSvc.getProductos().subscribe(data=>{
      this.productos = data
    })
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
        this.router.navigate(['/productos']);
      }, error => {
        console.log(error);
      })
    }
  }
}
