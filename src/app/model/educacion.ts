export class Educacion {
    id? : number;
    nombreE : string;
    descripcionE : string;
    imagenE : string;
    fechaFinE : string;

    constructor(nombreE: string,descripcionE: string, imagenE: string, fechaFinE: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.imagenE = imagenE;
        this.fechaFinE = fechaFinE;
    }

}
