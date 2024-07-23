export class Cartera {
  id: number;
  n_Clave_Cartera: string;
  n_Nombre: string;
  d_Alta: string;
  e_Descripcion: string;

  constructor(
    idcartera: number,
    d_cartera: string,
    e_Descripcion: string,
    e_Clave: string,
    n_cartera: string
  ) {
    this.id = idcartera;
    this.d_Alta = d_cartera;
    this.e_Descripcion = e_Descripcion;
    this.n_Clave_Cartera = e_Clave;
    this.n_Nombre = n_cartera;
  }
}
