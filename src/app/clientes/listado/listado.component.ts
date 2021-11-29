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

  idClienteEliminar:string|null = null
  nombreClienteEliminar:string = ""
  datoBuscar:string = ""

  page:number = 1;
  pageSize:number = 3;
  collectionSize:number = 0;

  clientes:Cliente[] = []

  constructor(private clientesSrv:ClienteService, private router:Router) { }

  ngOnInit(): void {
    this.cargarClientes()
  }

  buscarClientes(clean:boolean):void {
    if (clean) {
      this.datoBuscar = ""
    }
    this.cargarClientes()
  }

  cambiarMinusculasyTildes(textoCambiar:string):string {
    return textoCambiar.toLowerCase().replace('á','a').replace('é','e').replace('í','i').replace('ó','o').replace('ú','u');
  }

  cargarClientes():void {
    console.log(this.datoBuscar)
    this.clientesSrv.cargarClientes().subscribe(data=>{
      const listaTemp:Cliente[] = data
      const dbusc = this.cambiarMinusculasyTildes(this.datoBuscar)
      this.clientes = listaTemp.filter(cli=>this.cambiarMinusculasyTildes(cli.nombres+" "+cli.apellidos).includes(dbusc))
    },
    err=>{console.log(err)}
    )
    this.collectionSize = this.clientes.length
  }

  setClienteEliminar(id:string|null, nombre:string): void {
    this.idClienteEliminar = id==''? null : id
    this.nombreClienteEliminar = nombre
  }

  eliminarCliente():void {
    if (this.idClienteEliminar!=null) {
      this.clientesSrv.eliminarCliente(this.idClienteEliminar).subscribe(data=>{
        console.log("Cliente eliminado")
        this.cargarClientes()
      }, error => {
        console.log(error);
      })
    }
    
  }

}
