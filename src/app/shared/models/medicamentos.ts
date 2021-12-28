export class Medicamentos {
    idMedicamento!: number;
    codigoCompraMedicamentos!: string;
    codBarraMedicamentos!: string;
    nombreMedicamento!: string;
    cantidadMedicamento!: number;
    precioMedicamento!: number;
    nomLaboratorio!: string;
    nomDosificacion!: string;

  
    public constructor(partial?: Partial<Medicamentos>) {
      Object.assign(this, partial);
    }
}


