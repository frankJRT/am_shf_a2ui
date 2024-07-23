import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ComportamientoService } from '../../../../../service/comportamiento.service';
import { Router } from '@angular/router';
import { FileSaverModule, FileSaverService } from 'ngx-filesaver';

export interface ActionData {
  idElement: 0;
  actionName: '';
  descripcion: '';
}

@Component({
  selector: 'app-action-comportamiento',
  standalone: true,
  imports: [FileSaverModule],
  templateUrl: './action-comportamiento.component.html',
  styleUrl: './action-comportamiento.component.scss',
})
export class ActionComportamientoComponent {
  actionName: string = '';
  descripcion: String = '';
  idElement: number = 0;

  loading = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ActionData,
    private comportamientoService: ComportamientoService,
    private router: Router,
    private _FileSaverService: FileSaverService,
    public dialogRef: MatDialogRef<ActionComportamientoComponent>
  ) {
    this.idElement = data.idElement;
    this.actionName = data.actionName;
    this.descripcion = data.descripcion;
  }

  ngOnInit(): void {}

  execueteAction(): void {
    this.loading = true;
    console.log(this.descripcion);

    if (this.descripcion == 'Eliminar Comporamiento') {
      console.log('entra');
      this.comportamientoService
        .deleteFile(this.idElement)
        .subscribe((data) => {
          console.log('deleted response', data);
          this.loading = false;
          this.dialogRef.close();
          this.router.navigate(['carteras']);
        });
    } else if (this.descripcion == 'Subir Comportamiento') {
      this.comportamientoService
        .uploadProdData(this.idElement)
        .subscribe((data) => {
          console.log('Subir Comportamiento', data);
          this.loading = false;
          alert('Informacion cargada con Exito');
          this.dialogRef.close();
        });
    } else if (this.descripcion == 'Generar V9') {
      this.comportamientoService
        .generaV9(this.idElement, this.actionName)
        .subscribe((response) => {
          console.log(response);
          this.dialogRef.close();
          this._FileSaverService.save(
            response,
            'comportamientoV9_' + this.actionName + '.xlsx'
          );
        });
    } else if (this.descripcion == 'Generar Saldos') {
      this.comportamientoService
        .generaProcessPython(1, this.idElement, this.actionName)
        .subscribe((response) => {
          console.log(response);
          this.dialogRef.close();

          this._FileSaverService.save(
            response,
            'Valida_Saldos_' + this.idElement + '_' + this.actionName + '.xlsx'
          );
        });
    } else if (this.descripcion == 'Generar Buro') {
      this.comportamientoService
        .generaProcessPython(2, this.idElement, this.actionName)
        .subscribe((response) => {
          console.log(response);
          this.dialogRef.close();

          this._FileSaverService.save(
            response,
            'buro_' + this.idElement + this.actionName + '.zip'
          );
        });
    } else if (this.descripcion == 'Generar Penalizaciones') {
      this.comportamientoService
        .generaProcessPython(3, this.idElement, this.actionName)
        .subscribe((response) => {
          console.log(response);
          this.dialogRef.close();

          this._FileSaverService.save(
            response,
            'penalizaciones_' + this.idElement + this.actionName + '.zip'
          );
        });
    } else if (this.descripcion == 'Generar Comisiones') {
      this.comportamientoService
        .generaProcessPython(4, this.idElement, this.actionName)
        .subscribe((response) => {
          console.log(response);
          this.dialogRef.close();
          this._FileSaverService.save(
            response,
            'comisiones_' + this.idElement + this.actionName + '.xlsx'
          );
        });
    } else if (this.descripcion == 'Generar Seguros') {
      this.comportamientoService
        .generaProcessPython(5, this.idElement, this.actionName)
        .subscribe((response) => {
          console.log(response);
          this.dialogRef.close();
          this._FileSaverService.save(
            response,
            'Seguros_' + this.idElement + this.actionName + '.zip'
          );
        });
    } else if (this.descripcion == 'Generar Validaciones Formato') {
      this.comportamientoService
        .generaProcessPython(6, this.idElement, this.actionName)
        .subscribe((response) => {
          console.log(response);
          this.dialogRef.close();

          this._FileSaverService.save(
            response,
            'ValidacionFormatoComportamiento_' +
              this.idElement +
              this.actionName +
              '.xlsx'
          );
        });
    } else if (this.descripcion == 'Generar Validaciones') {
      this.comportamientoService
        .generaProcessPython(7, this.idElement, this.actionName)
        .subscribe((response) => {
          console.log(response);
          this.dialogRef.close();
          this._FileSaverService.save(
            response,
            'ValidacionFormatoComportamiento_' +
              this.idElement +
              this.actionName +
              '.xlsx'
          );
        });
    }
  }
}
