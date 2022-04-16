import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmpleadoComponent } from './empleado/components/list-empleado/list-empleado.component';
import { AddEditEmpleadoComponent } from './empleado/components/add-edit-empleado/add-edit-empleado.component';

const routes: Routes = [
  {path:'add' , component: AddEditEmpleadoComponent},
  {path:'listEmpleado' , component: ListEmpleadoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
