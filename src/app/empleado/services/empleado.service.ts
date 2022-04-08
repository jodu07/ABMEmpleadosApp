import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  listEmpleado: Empleado[]=[
    { nombreCompleto: 'Jhonnatan Dussán', 
    telefono: 314555, 
    correo: 'jho@gmail.com', 
    fechaIngreso: new Date(), 
    estadoCivil: 'soltero', 
    sexo:'m' },
    { nombreCompleto: 'Edgar Dussán', 
    telefono: 545455, 
    correo: 'ed@gmail.com', 
    fechaIngreso: new Date('2019-05-02'), 
    estadoCivil: 'soltero', 
    sexo:'m' },
    { nombreCompleto: 'Cielo Cuellar', 
    telefono: 445545, 
    correo: 'ciel@gmail.com', 
    fechaIngreso: new Date('2020-05-02'), 
    estadoCivil: 'casada', 
    sexo:'f' }
  ]
 
  constructor() { }

  getEmpleados(){

    //slice para devolver una copia del arreglo
    return this.listEmpleado.slice();
  }
}