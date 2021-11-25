import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../modelos/cliente'

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http:HttpClient) { }

  cargarClientes():Observable<any> {
    return this.http.get("http://localhost:3000/api/clientes")
  }

  cargarCliente(id:string|null):Observable<any> {
    return this.http.get("http://localhost:3000/api/clientes/"+id) 
  }

  guardarClienteNuevo(cliente:Cliente):Observable<any> {
    return this.http.post("http://localhost:3000/api/clientes", cliente)  
  }

  actualizarCliente(cliente:Cliente):Observable<any> {
    return this.http.put("http://localhost:3000/api/clientes/"+cliente._id, cliente) 
  }

  eliminarCliente(id:string):Observable<any> {
    return this.http.delete("http://localhost:3000/api/clientes/"+id) 
  }
}
