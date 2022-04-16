import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEditEmpleadoComponent } from './components/add-edit-empleado/add-edit-empleado.component';
import { ListEmpleadoComponent } from './components/list-empleado/list-empleado.component';
import { MensajeConfirmacionComponent } from './components/sharedComponents/mensaje-confirmacion/mensaje-confirmacion.component';


import { AngularMaterialModule } from './components/sharedComponents/angular-material/angular-material.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddEditEmpleadoComponent,
    ListEmpleadoComponent,    
    MensajeConfirmacionComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    AddEditEmpleadoComponent,
    ListEmpleadoComponent
  ]
})
export class EmpleadoModule { }
