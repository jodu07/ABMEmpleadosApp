import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditEmpleadoComponent } from './pages/add-edit-empleado/add-edit-empleado.component';
import { ListEmpleadoComponent } from './components/list-empleado/list-empleado.component';
import { MensajeConfirmacionComponent } from './components/sharedComponents/mensaje-confirmacion/mensaje-confirmacion.component';



@NgModule({
  declarations: [
    AddEditEmpleadoComponent,
    ListEmpleadoComponent,    
    MensajeConfirmacionComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AddEditEmpleadoComponent
  ]
})
export class EmpleadoModule { }
