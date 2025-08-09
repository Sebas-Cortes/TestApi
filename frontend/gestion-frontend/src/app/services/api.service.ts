import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../api.config';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl = API_BASE_URL;

  constructor(private http: HttpClient) {}

  getClientes(): Observable<any> {
    return this.http.get(`${this.baseUrl}clientes/`);
  }

  createCliente(cliente: any): Observable<any> {
    return this.http.post(`${this.baseUrl}clientes/`, cliente);
  }
}
