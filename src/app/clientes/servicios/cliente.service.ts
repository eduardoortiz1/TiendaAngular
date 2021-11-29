import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../modelos/cliente'

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http:HttpClient) { }

  //private URL:string = "http://localhost:3000/api/clientes/"
  private URL:string = "https://tiendaapi-2021.herokuapp.com/api/clientes/"

  cargarClientes():Observable<any> {
    return this.http.get(this.URL)
  }

  cargarCliente(id:string|null):Observable<any> {
    return this.http.get(this.URL+id)
  }

  guardarNuevoCliente(cliente:Cliente):Observable<any> {
    return this.http.post(this.URL, cliente)
  }

  actualizarCliente(cliente:Cliente):Observable<any> {
    return this.http.put(this.URL+cliente._id, cliente)
  }

  eliminarCliente(id:string):Observable<any> {
    return this.http.delete(this.URL+id)
  }
 
}
