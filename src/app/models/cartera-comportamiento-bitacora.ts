export class CarteraComportamientoBitacora {
  id: number;
  modulo: string;
  status: string;
  action: string;
  fecha: string;
  values: string;
  usuario: string;

  constructor(
    n_fecha: string,
    n_usuario: string,
    n_modulo: string,
    n_action: string,
    n_values: string,
    n_status: string,
    n_id: number
  ) {
    this.id = n_id;
    this.modulo = n_modulo;
    this.status = n_status;
    this.action = n_action;
    this.fecha = n_fecha;
    this.values = n_values;
    this.usuario = n_usuario;
  }
}
