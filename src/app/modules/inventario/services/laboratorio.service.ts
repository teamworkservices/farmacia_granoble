import { Injectable } from '@angular/core';
import { Laboratorio } from 'src/app/shared/models/laboratorio';

@Injectable({
  providedIn: 'root'
})
export class LaboratorioService {

  laboratorioData: Laboratorio[] = [
    {id: 1, nombre: 'Los angeles', codigo: 'H'},
    {id: 2, nombre: 'lorena vejarano', codigo: 'H'},
    {id: 3, nombre: 'Hogen', codigo: 'H'},
  ];

  constructor() { }
//getDosificaciones(): Observable<Dosificacion[]> {
  listarLaboratorios(): Laboratorio[] {
    //return this.http.get<Dosificacion[]>(environment.urlServer+'dosificacion/listar');
    return this.laboratorioData;
  }

  //agregarDosificacion(dosificacion: Dosificacion):Observable<Dosificacion> {
  agregarLaboratorio(Laboratorio: Laboratorio):Laboratorio {
    //return this.http.post<Dosificacion>(environment.urlServer+'dosificacion/agregar', dosificacion);
    if(this.laboratorioData.length==0)
    {
      Laboratorio.id = this.laboratorioData.length+1;
    }else{
      let pos : number;
      pos= this.laboratorioData[this.laboratorioData.length-1].id;
      Laboratorio.id = pos +1;
      
    }
    this.laboratorioData.push(Laboratorio);
      return Laboratorio;
  }

  editarLaboratorio(laboratorio: Laboratorio):Laboratorio{
    let indexLaboratorio = this.laboratorioData.findIndex(item => item.id == laboratorio.id);
    Object.assign(this.laboratorioData[indexLaboratorio], laboratorio);
    return laboratorio;
  }

  eliminarLaboratorio(id:number){
    this.laboratorioData = this.laboratorioData.filter(item => item.id != id);
  }
}
