import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../servicios/cliente.service'
import { Cliente } from '../modelos/cliente'
import { Router } from '@angular/router';


@Component({
  selector: 'clientes-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ClientesListadoComponent implements OnInit {

  clientes:Cliente[] = []

  constructor(private srv:ClienteService, private router:Router) { }

  ngOnInit(): void {
    this.cargarClientes()
  }

  cargarClientes():void {
    this.srv.cargarClientes().subscribe(data=>{
      this.clientes = data
    })
  }

  eliminarCliente(id:string|null):void {
    if (id!=null) {
      this.srv.eliminarCliente(id).subscribe(data=>{
        console.log("Cliente eliminado")
      })
    }
    this.cargarClientes()
    this.ngOnInit()
  }

}
