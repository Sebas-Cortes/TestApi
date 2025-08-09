import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule],
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  clientes: any[] = [];
  form: FormGroup;

  constructor(private api: ApiService, private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: [''],
      email: ['']
    });
  }

  ngOnInit(): void {
    this.cargarClientes();
  }

  cargarClientes(): void {
    this.api.getClientes().subscribe(data => (this.clientes = data));
  }

  crearCliente(): void {
    if (this.form.valid) {
      this.api.createCliente(this.form.value).subscribe(() => {
        this.form.reset();
        this.cargarClientes();
      });
    }
  }
}
