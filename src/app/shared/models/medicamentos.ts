export class Medicamentos {
    idMedicamento!: number;
    codigoCompraMedicamentos!: string;
    codBarraMedicamentos!: string;
    nombreMedicamento!: string;
    cantidadMedicamento!: number;
    precioMedicamento!: number;
    idLaboratorio!: number;
    idDosificacion!: number;

  
    public constructor(partial?: Partial<Medicamentos>) {
      Object.assign(this, partial);
    }
}


