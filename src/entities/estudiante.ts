export class Estudiante {
  id: number;
  nombre: string;
  apellidos: string;
  edad: number;
  profesion: string;
  email: string;

  constructor(
    id: number,
    nombre: string,
    apellidos: string,
    edad: number,
    profesion: string,
    email: string,
  ) {
    this.id = id;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
    this.profesion = profesion;
    this.email = email;
  }
}
