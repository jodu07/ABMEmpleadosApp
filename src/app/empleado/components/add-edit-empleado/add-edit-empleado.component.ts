import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../../models/empleado';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-add-edit-empleado',
  templateUrl: './add-edit-empleado.component.html',
  styleUrls: ['./add-edit-empleado.component.css']
})
export class AddEditEmpleadoComponent implements OnInit {

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
