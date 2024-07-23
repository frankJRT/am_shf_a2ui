import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { ComportamientoService } from '../../../../../service/comportamiento.service';
import { ControlEnvioStatic } from '../../../../../models/control-envio-static';

export interface DialogData {
  id: 0;
  name: '';
}

@Component({
  selector: 'app-detalle-archivo',
  standalone: true,
  imports: [MatDialogModule, MatTableModule],
  templateUrl: './detalle-archivo.component.html',
  styleUrl: './detalle-archivo.component.scss',
})
export class DetalleArchivoComponent {
  name: String = '';
  idfile: number = 0;
  controlEnvioEstadisticas!: ControlEnvioStatic[];
  displayedColumnsFile: string[] = ['staticName', 'staticValue'];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private comportamientoService: ComportamientoService
  ) {
    this.idfile = data.id;
    this.name = data.name;
  }
  ngOnInit(): void {
    this.comportamientoService.staticsFile(this.idfile).subscribe((data) => {
      this.controlEnvioEstadisticas = data;
    });
  }
}
