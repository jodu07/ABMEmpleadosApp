import { Component, OnInit } from '@angular/core';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';

import { Router } from '@angular/router';
import { Empleado } from '../../models/empleado';
import { EmpleadoService } from '../../services/empleado.service';

interface EstadoCivil {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-edit-empleado',
  templateUrl: './add-edit-empleado.component.html',
  styleUrls: ['./add-edit-empleado.component.css'],
  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'primary' },
}]
})
export class AddEditEmpleadoComponent implements OnInit {

  estadoCiviles: EstadoCivil[] = [
    {value: 'soltero', viewValue: 'Soltero'},
    {value: 'casado', viewValue: 'Casado'},
    {value: 'divorciado', viewValue: 'Divorciado'},
    
  ];

  empleado: Empleado={
    nombreCompleto: '', 
    telefono: 0, 
    correo: '', 
    fechaIngreso: new Date(), 
    estadoCivil: '', 
    sexo:''
  }



  constructor(private _empleadoService: EmpleadoService,
              private router: Router ) { }

  agregarEmpleado(){

    this._empleadoService.addEmpleado(this.empleado);  
    this.router.navigate(['/']);

  }



  ngOnInit(): void {


  }



}
