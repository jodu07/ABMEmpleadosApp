import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild} from '@angular/core';

import { EmpleadoService } from '../../services/empleado.service';
import { Empleado } from '../../models/empleado';
import { MensajeConfirmacionComponent } from '../sharedComponents/mensaje-confirmacion/mensaje-confirmacion.component';


import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.css']
})
export class ListEmpleadoComponent implements OnInit {

  listEmpleados: Empleado[]=[];

  displayedColumns: string[] = ['position', 'nombreCompleto', 'telefono', 'correo', 'fechaIngreso', 'estadoCivil', 'sexo', 'acciones'];
  dataSource = new MatTableDataSource<Empleado>();

// @ViewChil para hacer referencia a un hijo
  @ViewChild(MatPaginator) paginator!: MatPaginator;  // paginación
  @ViewChild(MatSort) sort!: MatSort;   //ordenamiento

  ngAfterViewInit() {
    
  }

  constructor(private _liveAnnouncer: LiveAnnouncer,
              private _empleadoService: EmpleadoService,
              public dialog: MatDialog,
              public _snackBar: MatSnackBar) { }
        

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  ngOnInit(): void {
    this.listarEmpleados();
  }

  listarEmpleados(){
    this.listEmpleados = this._empleadoService.getEmpleados();
    console.log('arreglo: ',this.listEmpleados);
    this.dataSource = new MatTableDataSource<Empleado>(this.listEmpleados);
   // console.log('arreglo2: ',this.listEmpleados);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;  //ordenamiento

  }

  eliminarEmpleado(index: number){
   // console.log(index);
  
    const dialogRef = this.dialog.open(MensajeConfirmacionComponent, {
      width: '350px',
      data: {mensaje: 'Está seguro de eliminar empleado?'},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'aceptar'){
        this._empleadoService.deleteEmpleado(index );
        this.listarEmpleados();
        this._snackBar.open('El empleado se ha eliminado con exito!', '',{
          duration: 3000
        }            
      )}      
    }); 
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }


}
