import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../empleado/components/sharedComponents/angular-material/angular-material.module';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
