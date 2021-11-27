import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../servicios/cliente.service'
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../modelos/cliente'

@Component({
  selector: 'clientes-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class ClientesRegistroComponent implements OnInit {

  id:string | null = ""
  nombres:string =""
  apellidos:string = ""
  tipo:string = ""
  numero:number = 0
  
  constructor(private srv:ClienteService, private aRoute:ActivatedRoute, private router:Router) { 
    this.id = this.aRoute.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.cargarCliente()  
  }

  cargarCliente():void {
    if (this.id != null) {
      this.srv.cargarCliente(this.id).subscribe(data=>{
        this.nombres=data.nombres
        this.apellidos=data.apellidos
        this.tipo=data.identificacion.tipo
        this.numero=data.identificacion.numero
      })
    }
  }

  guardarCliente():void {
    const cliente:Cliente = {
      _id: this.id,
      nombres: this.nombres,
      apellidos: this.apellidos,
      identificacion: {
        tipo: this.tipo,
        numero: this.numero
      }
    }
    if(this.id != null) {
      this.srv.actualizarCliente(cliente).subscribe(data=>{
        console.log("Cliente actualizado")
        this.router.navigate(['/clientes']);
      })
    }
    else {
      this.srv.guardarNuevoCliente(cliente).subscribe(data=>{
        console.log("Cliente nuevo guardado")
        this.router.navigate(['/clientes']);
      })
    }
  }
}
