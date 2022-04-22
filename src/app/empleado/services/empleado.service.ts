import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  listEmpleados: Empleado[]=[
    { nombreCompleto: 'Jhonnatan Dussán', 
    telefono: 314555, 
    correo: 'jho@gmail.com', 
    fechaIngreso: new Date(), 
    estadoCivil: 'soltero', 
    sexo:'Masculino' },
    { nombreCompleto: 'Edgar Dussán', 
    telefono: 545455, 
    correo: 'ed@gmail.com', 
    fechaIngreso: new Date('2019-05-05'), 
    estadoCivil: 'soltero',
    sexo:'Masculino' },
    { nombreCompleto: 'Cielo Cuellar', 
    telefono: 445545, 
    correo: 'ciel@gmail.com', 
    fechaIngreso: new Date('2020-05-25'), 
    estadoCivil: 'casado', 
    sexo:'Femenino' }
  ] 
 
  constructor() { }

  getEmpleados(){

    //slice para devolver una copia del arreglo
    return this.listEmpleados;
  }
  
  deleteEmpleado(index: number){
    this.listEmpleados.splice(index, 1); // borra a partir del valor que llegue en index y solo uno
  }

  addEmpleado(empleado: Empleado){
    this.listEmpleados.push(empleado),
    console.log(this.listEmpleados);
    
  }

  getEmpleado(index:number){
    return this.listEmpleados[index];               
  }

  updateEmpleado(empleado: Empleado, index: number){
    this.listEmpleados[index] = empleado;
  }






}
