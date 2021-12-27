import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Medicamentos } from 'src/app/shared/models/medicamentos';
import Swal from 'sweetalert2';
import { MedicamentosService } from '../../../services/medicamentos.service';

@Component({
  selector: 'app-crear-medicamentos',
  templateUrl: './crear-medicamentos.component.html',
  styleUrls: ['./crear-medicamentos.component.css']
})
export class CrearMedicamentosComponent implements OnInit {

  
  form: FormGroup;

  constructor(private fb: FormBuilder, 
              private medicamentosService: MedicamentosService,
              public dialogRef: MatDialogRef<CrearMedicamentosComponent>) {

    this.form = this.fb.group({
      codigoCtrl: ['', [Validators.required, Validators.maxLength(10)]],
      nombreCtrl: ['', [Validators.required, Validators.maxLength(20)]],
    })
  }

  ngOnInit(): void {
  }

  agregarMedicamentos(){
    if (this.form.valid) {
      let medicamentos = new Medicamentos();
      medicamentos.codigoCompraMedicamentos= this.form.value['codigoCMCtrl'];
      medicamentos.codBarraMedicamentos= this.form.value['codigoBMCtrl'];
      medicamentos.nombreMedicamento= this.form.value['nombreMCtrl'];
      medicamentos.cantidadMedicamento= this.form.value['cantidadMCtrl'];
      medicamentos.precioMedicamento= this.form.value['precioMCtrl'];
      medicamentos.idLaboratorio= this.form.value['idLMCtrl'];
      medicamentos.idDosificacion= this.form.value['idDMCtrl'];

      medicamentos = this.medicamentosService.agregarMedicamentos(medicamentos);
      this.dialogRef.close(medicamentos);
    }
  }

  confirmModal(){
    Swal.fire({
      title: 'Correcto',
      text: 'Medicamento agregado exitosamente!',
      icon: 'success',
      showConfirmButton: false,
      timer: 2000
    })
    
  }

}
