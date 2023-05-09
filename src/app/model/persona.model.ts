export class persona{
id?: number;
nombre: String;
apellido: String;
img: String;
descripcion: String;
ubicacion: String;
telefono: String;
email: String;
presentacion: String;
acercaDe: String;

constructor(nombre: String, apellido: String, img: String, descripcion: String, ubicacion: String, telefono: String, email: String, presentacion: String, acercaDe: String){
    this.nombre = nombre;
    this.apellido = apellido;
    this.img = img;
    this.descripcion = descripcion;
    this.ubicacion = ubicacion;
    this.telefono = telefono;
    this.email = email;
    this.presentacion = presentacion;
    this.acercaDe=acercaDe;
}

}