import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Dosificacion } from 'src/app/shared/models/dosificacion';
import { Laboratorio } from 'src/app/shared/models/laboratorio';
import { Medicamentos } from 'src/app/shared/models/medicamentos';
import Swal from 'sweetalert2';
import { DosificacionService } from '../../../services/dosificacion.service';
import { LaboratorioService } from '../../../services/laboratorio.service';
import { MedicamentosService } from '../../../services/medicamentos.service';

@Component({
  selector: 'app-crear-medicamentos',
  templateUrl: './crear-medicamentos.component.html',
  styleUrls: ['./crear-medicamentos.component.css']
})
export class CrearMedicamentosComponent implements OnInit {

  
  form: FormGroup;
  laboratorios: Laboratorio[];
  dosificaciones: Dosificacion[];
  
  constructor(private fb: FormBuilder, private medicamentoService: MedicamentosService, 
    public dialogRef: MatDialogRef<CrearMedicamentosComponent>,
    private laboratorioService: LaboratorioService,
    private dosificacionService: DosificacionService) { 
    this.dosificaciones = this.dosificacionService.getDosificaciones();
    this.laboratorios = this.laboratorioService.listarLaboratorios();
    this.form = this.fb.group({
      nombreCtrl: ['', [Validators.required, Validators.maxLength(20)]],
      laboratorioCtrl:['', [Validators.required]],
      dosificacionCtrl: ['', [Validators.required]],
      codigoBarraCtrl: ['', [Validators.required, Validators.maxLength(20)]],
      codigoCompraCtrl: ['', [Validators.required, Validators.maxLength(20)]],
      cantidadCtrl: ['', [Validators.required, Validators.maxLength(20)]],
      precioCtrl: ['', [Validators.required, Validators.maxLength(20)]],
    })  }

  ngOnInit(): void {
    
  }

  agregarMedicamento(){
    if (this.form.valid) {
      let varMedicamento = new Medicamentos();
      varMedicamento.codigoCompraMedicamentos = this.form.value['codigoCompraCtrl'];
      varMedicamento.codBarraMedicamentos = this.form.value['codigoBarraCtrl'];
      varMedicamento.nombreMedicamento = this.form.value['nombreCtrl'];
      varMedicamento.cantidadMedicamento = this.form.value['cantidadCtrl'];
      varMedicamento.precioMedicamento = this.form.value['precioCtrl'];
      varMedicamento.nomLaboratorio = this.form.value['laboratorioCtrl'];
      varMedicamento.nomDosificacion = this.form.value['dosificacionCtrl'];

      varMedicamento = this.medicamentoService.agregarMedicamentos(varMedicamento);
      this.dialogRef.close(varMedicamento);
    }
  }


  confirmModal(){
    Swal.fire({
      title: 'Correcto',
      text: 'Medicamento  creado exitosamente!',
      icon: 'success',
      showConfirmButton: false,
      timer: 2000
    })
  }
}