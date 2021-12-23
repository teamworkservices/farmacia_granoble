import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Dosificacion } from 'src/app/shared/models/dosificacion';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DosificacionService {


  dosificacionData: Dosificacion[] = [
    {id: 1, nombre: 'Hydrogen', descripcion: 'Descripcion', codigo: 'H'},
    {id: 2, nombre: 'Hydro', descripcion: 'hkvhvh', codigo: 'H'},
    {id: 3, nombre: 'Hogen', descripcion: 'hdhdhctgcv', codigo: 'H'},
    
  ];

  constructor() { }
//listar
    //getDosificaciones(): Observable<Dosificacion[]> {
      getDosificaciones(): Dosificacion[] {
        //return this.http.get<Dosificacion[]>(environment.urlServer+'dosificacion/listar');
        return this.dosificacionData;
      }


  //agregarDosificacion(dosificacion: Dosificacion):Observable<Dosificacion> { 
  agregarDosificacion(dosificacion: Dosificacion):Dosificacion {
    //return this.http.post<Dosificacion>(environment.urlServer+'dosificacion/agregar', dosificacion);
    dosificacion.id = this.dosificacionData.length+1;
    this.dosificacionData.push(dosificacion);
    return dosificacion;
  }
}
