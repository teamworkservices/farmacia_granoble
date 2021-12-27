import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DosificacionComponent } from './components/dosificacion/dosificacion.component';
import { LaboratorioComponent } from './components/laboratorio/laboratorio.component';
import { MedicamentosComponent } from './components/medicamentos/medicamentos.component';

const routes: Routes = [
  {
    path: 'dosificacion',
    component: DosificacionComponent
  },
  {
    path: 'laboratorio',
    component: LaboratorioComponent
  },
  {
    path: 'medicamentos',
    component: MedicamentosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventarioRoutingModule { }
