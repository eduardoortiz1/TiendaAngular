import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicio/productos.service'
import { Producto } from '../modelo/producto'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'productos-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class ProductosRegistroComponent implements OnInit {

  idProducto:string|null = null
  txtNombre:string = ""
  txtTipo:string = ""
  txtPresentacion:string = ""
  txtCantidad:number = 0
  txtPrecio:number = 0

  constructor(private productosSvc:ProductosService, private router:Router, private aRouter: ActivatedRoute) { 
    this.idProducto = this.aRouter.snapshot.paramMap.get('id');  
  }

  ngOnInit(): void {
    this.cargarProducto()
  }

  cargarProducto():void {
    if (this.idProducto == null) {
      this.txtNombre = ""
      this.txtTipo = ""
      this.txtPresentacion = ""
      this.txtCantidad = 0
      this.txtPrecio = 0      
    }
    else {
      this.productosSvc.getProducto(this.idProducto).subscribe(data=>{
        this.txtNombre = data.nombre
        this.txtTipo = data.tipo
        this.txtPresentacion = data.presentacion
        this.txtCantidad = data.cantidad
        this.txtPrecio = data.precio
      })
    } 
  }

  guardarProducto():void {
    const producto:Producto = {
      _id : this.idProducto,
      nombre : this.txtNombre,
      tipo : this.txtTipo,
      presentacion : this.txtPresentacion,
      cantidad : this.txtCantidad,
      precio : this.txtPrecio,
    }
    this.productosSvc.guardarProducto(producto).subscribe(data=>{
      console.log('El producto fue registrado con exito!');
      this.router.navigate(['/productos']);
    }, error => {
      console.log(error);
    })
  }  
}
