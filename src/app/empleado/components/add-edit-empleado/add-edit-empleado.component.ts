import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';

import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../../models/empleado';
import { EmpleadoService } from '../../services/empleado.service';

import {MatSnackBar} from '@angular/material/snack-bar';

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

  idEmpleado:any;
  accion: string = 'Crear';

  myForm: FormGroup;

  constructor(private _empleadoService: EmpleadoService,
              private router: Router,
              private fb: FormBuilder,
              private _snackBar: MatSnackBar,
              private _activeRoute:ActivatedRoute ) 
              {
  this.myForm = this.fb.group({
  nombreCompleto: ['',[Validators.required, Validators.maxLength(20)]],
  correo:['',[Validators.required, Validators.email]],
  fechaIngreso:['',[Validators.required]],
  telefono:['',[Validators.required]],
  estadoCivil:['',[Validators.required]],
  sexo:['',[Validators.required]]
  });
  this.idEmpleado = this._activeRoute.snapshot.params['id'];
    }

  guardarEmpleado(){ 
   // console.log(this.myForm);    
    const empleado: Empleado={
      nombreCompleto: this.myForm.get('nombreCompleto')?.value, 
      telefono: this.myForm.get('telefono')?.value, 
      correo: this.myForm.get('correo')?.value, 
      fechaIngreso: this.myForm.get('fechaIngreso')?.value, 
      estadoCivil: this.myForm.get('estadoCivil')?.value, 
      sexo: this.myForm.get('sexo')?.value
    }

    if(this.idEmpleado){
      this.actualizarEmpleado(empleado);
      
    } else{
      this.agregarEmpleado(empleado);
    }
  }

  agregarEmpleado(empleado:Empleado){
    this._empleadoService.addEmpleado(empleado);  
      this._snackBar.open('El empleado se ha registrado con exito!', '',{
      duration: 3000
      });
      this.router.navigate(['/']);
  }

  actualizarEmpleado(empleado: Empleado){
    this._empleadoService.updateEmpleado(empleado, this.idEmpleado);
    this._snackBar.open('El empleado fue actualizado con exito!', '',{
      duration: 3000
      });
    this.router.navigate(['/']);
  }

   traerEmpleado(){
    const empleado: Empleado = this._empleadoService.getEmpleado(this.idEmpleado);
    console.log(empleado);
    this.myForm.patchValue(empleado);     
  }

  ngOnInit(): void {
    if(this.idEmpleado){
      this.accion = 'Editar';
      this.traerEmpleado();
    }
  }


}
