import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Medicamentos } from 'src/app/shared/models/medicamentos';
import Swal from 'sweetalert2';
import { MedicamentosService } from '../../services/medicamentos.service';
import { CrearMedicamentosComponent } from './crear-medicamentos/crear-medicamentos.component';
import { EditarMedicamentosComponent } from './editar-medicamentos/editar-medicamentos.component';

@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.component.html',
  styleUrls: ['./medicamentos.component.css']
})
export class MedicamentosComponent implements OnInit {

  MedicamentosData: Medicamentos[] = [];
  displayedColumns: string[] = ['idM', 'codigoCM', 'codigoBM', 'nombreM', 'cantidadM', 'precioM','idL', 'idD','acciones'];

  dataSource!: MatTableDataSource<Medicamentos>

  constructor(public dialog: MatDialog, public medicamentosService:MedicamentosService) { }

  ngOnInit(): void 
  {
    this.loadTableMedicamentos();
  }
  loadMedicamentos(){
    return this.medicamentosService.listarMedicamentos();
    
 }

 loadTableMedicamentos(){
   this.dataSource = new MatTableDataSource<Medicamentos>([]);
   this.dataSource.data = this.loadMedicamentos();
 }
  
 openCreateDialog(){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.width = "50%";
  dialogConfig.panelClass = 'dialog-custom'
  const dialogRef = this.dialog.open(CrearMedicamentosComponent, dialogConfig);
  dialogRef.afterClosed().subscribe((result) => {
    if (!!result) {
      this.loadMedicamentos();
      this.loadTableMedicamentos();
    }
  });
}

openEditDialog(medicamentos: Medicamentos){
    
  const dialogRef = this.dialog.open(EditarMedicamentosComponent, {
    width: "50%",
    data: medicamentos,
    panelClass: 'dialog-custom'
  });
  dialogRef.afterClosed().subscribe((result) => {
    if (!!result) {
      this.loadMedicamentos();
      this.loadTableMedicamentos();
    }
  });
}

eliminarMedicamentos(medicamentos: Medicamentos){

  Swal.fire({
    title: '¿Deseas eliminar el medicamentos?',
    showCancelButton: true,
    confirmButtonText: 'Eliminar',
  }).then((result) => {
    if (result.isConfirmed) {
      this.medicamentosService.eliminarMedicamentos(medicamentos.idMedicamento);
      this.loadTableMedicamentos();
      Swal.fire('Saved!', '', 'success')
    }
  })

}

}
