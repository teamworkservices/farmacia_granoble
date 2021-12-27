import { Injectable } from '@angular/core';
import { Medicamentos } from 'src/app/shared/models/medicamentos';

@Injectable({
  providedIn: 'root'
})
export class MedicamentosService {

  MedicamentosData: Medicamentos[] = [
    {idMedicamento: 1, codigoCompraMedicamentos: '03', codBarraMedicamentos: 'AMJ456', nombreMedicamento: 'Acetaminofen', cantidadMedicamento: 10, precioMedicamento: 2000,idLaboratorio: 2, idDosificacion: 3},
    {idMedicamento: 2, codigoCompraMedicamentos: '09', codBarraMedicamentos: '125TYU', nombreMedicamento: 'Paracetamol', cantidadMedicamento: 3, precioMedicamento: 1500,idLaboratorio: 3, idDosificacion: 2},
    {idMedicamento: 3, codigoCompraMedicamentos: '154', codBarraMedicamentos: 'KOI74', nombreMedicamento: 'Ibuprofeno', cantidadMedicamento: 7, precioMedicamento: 1200,idLaboratorio: 2, idDosificacion: 1},
  ];

  constructor() { }

  //getDosificaciones(): Observable<Dosificacion[]> {
    listarMedicamentos(): Medicamentos[] {
      //return this.http.get<Dosificacion[]>(environment.urlServer+'dosificacion/listar');
      return this.MedicamentosData;
    }
  
    //agregarDosificacion(dosificacion: Dosificacion):Observable<Dosificacion> {
    agregarMedicamentos(medicamentos: Medicamentos):Medicamentos {
      //return this.http.post<Dosificacion>(environment.urlServer+'dosificacion/agregar', dosificacion);
      if(this.MedicamentosData.length==0)
      {
        medicamentos.idMedicamento = this.MedicamentosData.length+1;
      }else{
        let pos : number;
        pos= this.MedicamentosData[this.MedicamentosData.length-1].idMedicamento;
        medicamentos.idMedicamento = pos +1;
        
      }
      this.MedicamentosData.push(medicamentos);
        return medicamentos;
    }
  
    editarLaboratorio(medicamentos: Medicamentos):Medicamentos{
      let indexMedicamentos = this.MedicamentosData.findIndex(item => item.idMedicamento == medicamentos.idMedicamento);
      Object.assign(this.MedicamentosData[indexMedicamentos], medicamentos);
      return medicamentos;
    }
  
    eliminarMedicamentos(id:number){
      this.MedicamentosData = this.MedicamentosData.filter(item => item.idMedicamento != id);
    }
}


