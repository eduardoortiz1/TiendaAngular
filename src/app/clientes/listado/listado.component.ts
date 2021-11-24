import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../servicios/cliente.service'
import { Cliente } from '../modelos/cliente'

@Component({
  selector: 'clientes-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ClientesListadoComponent implements OnInit {

  clientes:Cliente[] = []

  constructor(private srv:ClienteService) { }

  ngOnInit(): void {
    this.srv.cargarClientes().subscribe(data=>{
      this.clientes = data
    })
  }

}
