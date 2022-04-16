import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EmpleadoService } from '../../services/empleado.service';
import { Empleado } from '../../models/empleado';


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
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(private _liveAnnouncer: LiveAnnouncer,
              private _empleadoService: EmpleadoService) { }


        

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
    console.log('arreglo2: ',this.listEmpleados);

  }

  eliminarEmpleado(index: number){
   // console.log(index);
   if(confirm('¿Seguro que desea elminiar el empleado?')){
   this._empleadoService.deleteEmpleado(index );
   this.listarEmpleados();

  }

  }



}
