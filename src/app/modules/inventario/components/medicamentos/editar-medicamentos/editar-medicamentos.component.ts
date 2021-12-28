import { group } from '@angular/animations';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Dosificacion } from 'src/app/shared/models/dosificacion';
import { Laboratorio } from 'src/app/shared/models/laboratorio';
import { Medicamentos } from 'src/app/shared/models/medicamentos';
import Swal from 'sweetalert2';
import { DosificacionService } from '../../../services/dosificacion.service';
import { LaboratorioService } from '../../../services/laboratorio.service';
import { MedicamentosService } from '../../../services/medicamentos.service';

@Component({
  selector: 'app-editar-medicamentos',
  templateUrl: './editar-medicamentos.component.html',
  styleUrls: ['./editar-medicamentos.component.css']
})
export class EditarMedicamentosComponent implements OnInit {

    form: FormGroup;
    laboratorios: Laboratorio[];
    dosificaciones: Dosificacion[];
  
    constructor(private fb: FormBuilder, 
                private medicamentoService: MedicamentosService,
                public dialogRef: MatDialogRef<EditarMedicamentosComponent>,
                private laboratorioService: LaboratorioService,
                private dosificacionService: DosificacionService,
                @Inject(MAT_DIALOG_DATA) public data: Medicamentos) {
  
                  this.dosificaciones = this.dosificacionService.getDosificaciones();
                  this.laboratorios = this.laboratorioService.listarLaboratorios();          
      this.form = this.fb.group({
        codigoCompraCtrl: [data.codigoCompraMedicamentos, [Validators.required, Validators.maxLength(20)]],
        codigoBarraCtrl: [data.codBarraMedicamentos, [Validators.required, Validators.maxLength(20)]],
        nombreCtrl: [data.nombreMedicamento, [Validators.required, Validators.maxLength(20)]],
        cantidadCtrl: [data.cantidadMedicamento, [Validators.required, Validators.maxLength(20)]],
        precioCtrl: [data.precioMedicamento, [Validators.required, Validators.maxLength(20)]],
        laboratorioCtrl: [data.nomLaboratorio, [Validators.required, Validators.maxLength(20)]],
        dosificacionCtrl: [data.nomDosificacion, [Validators.required, Validators.maxLength(20)]],
       
        
        
      })
    }
  
    ngOnInit(): void {
    }
  
    editarMedicamento(){
      if (this.form.valid) {
        let varMedicamento = new Medicamentos();
        varMedicamento.idMedicamento = this.data.idMedicamento;
        varMedicamento.codigoCompraMedicamentos = this.form.value['codigoCompraCtrl'];
        varMedicamento.codBarraMedicamentos = this.form.value['codigoBarraCtrl'];
        varMedicamento.nombreMedicamento = this.form.value['nombreCtrl'];
        varMedicamento.cantidadMedicamento = this.form.value['cantidadCtrl'];
        varMedicamento.precioMedicamento = this.form.value['precioCtrl'];
        varMedicamento.nomLaboratorio = this.form.value['laboratorioCtrl'];
        varMedicamento.nomDosificacion = this.form.value['dosificacionCtrl'];
  
        Object.assign(varMedicamento, this.medicamentoService.editarMedicamentos(varMedicamento));
        this.dialogRef.close(varMedicamento);
      }
    }
  
    confirmModal(){
      Swal.fire({
        title: 'Correcto',
        text: 'Medicamento actualizada exitosamente!',
        icon: 'success',
        showConfirmButton: false,
        timer: 2000
      })
    }
  
  }


  