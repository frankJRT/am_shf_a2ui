import { Component, Input, OnInit } from '@angular/core';
import { PeriodoProceso } from '../../../../models/periodo-proceso';
import { environment } from '../../../../../environments/environment';
import { ControlEnvio } from '../../../../models/control-envio';
import {
  FormsModule,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
  FormGroup,
} from '@angular/forms';
import { ComportamientoService } from '../../../../service/comportamiento.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { Periodo } from '../../../../models/periodo';
import { ActionComportamientoComponent } from './action-comportamiento/action-comportamiento.component';
import { DetalleArchivoComponent } from './detalle-archivo/detalle-archivo.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf, DatePipe } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-comportamiento',
  standalone: true,
  imports: [
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    ReactiveFormsModule,
    MatMenuModule,
    DetalleArchivoComponent,
    NgIf,
  ],
  templateUrl: './comportamiento.component.html',
  styleUrl: './comportamiento.component.scss',
})
export class ComportamientoComponent implements OnInit {
  comportamientoUrl = environment.comportamientoUrl;
  periodoProcesos!: PeriodoProceso[];
  controlEnvios!: ControlEnvio[];
  displayedColumns: string[] = [
    'id',
    'd_Alta',
    'I_Periodo',
    'actions',
    'production',
  ];
  displayedColumnsFile: string[] = [
    'fileName',
    'claveAdministradorCartera',
    'claveIFCedioCartera',
    'detalle',
    'actions',
  ];

  @Input() idCartera = 0;
  myForm = new UntypedFormGroup({
    file: new UntypedFormControl('', [Validators.required]),
    fileSource: new UntypedFormControl('', [Validators.required]),
  });

  constructor(
    private http: HttpClient,
    private comportamientoService: ComportamientoService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.comportamientoService
      .listbyCartera(this.idCartera)
      .subscribe((data) => {
        this.periodoProcesos = data;
      });
  }

  get f() {
    return this.myForm.controls;
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file,
      });
    }
  }

  submit() {
    const formData = new FormData();
    formData.append('idCartera', this.idCartera.toString());
    formData.append('file', this.myForm.get('fileSource')?.value);
    formData.append('idCarteraControlComisiones', this.idCartera.toString());

    console.log(formData);
    this.http
      .post(this.comportamientoUrl + 'upload', formData)
      .subscribe((res) => {
        console.log(res);
        alert(Object.values(res));
      });
  }

  getArchivos(event: Event, periodoProces: PeriodoProceso): void {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        cartera: periodoProces.id,
      },
    };

    this.comportamientoService
      .listFilesbyCartera(periodoProces.id)
      .subscribe((files) => {
        this.controlEnvios = files;
      });
  }

  dataProduction(event: Event, periodoProces: PeriodoProceso): void {
    let id = <Periodo>periodoProces.i_Periodo;

    this.dialog.open(ActionComportamientoComponent, {
      data: {
        idElement: periodoProces.id,
        actionName: id.id,
        descripcion: 'Subir Comportamiento',
      },
    });
  }

  generateV9(event: Event, periodoProces: PeriodoProceso): void {
    let id = <Periodo>periodoProces.i_Periodo;

    this.dialog.open(ActionComportamientoComponent, {
      data: {
        idElement: periodoProces.id,
        actionName: id.id,
        descripcion: 'Generar V9',
      },
    });
  }

  generateSaldos(event: Event, periodoProces: PeriodoProceso): void {
    let id = <Periodo>periodoProces.i_Periodo;

    this.dialog.open(ActionComportamientoComponent, {
      data: {
        idElement: periodoProces.id,
        actionName: id.id,
        descripcion: 'Generar Saldos',
      },
    });
  }
  generateBuro(event: Event, periodoProces: PeriodoProceso): void {
    let id = <Periodo>periodoProces.i_Periodo;

    this.dialog.open(ActionComportamientoComponent, {
      data: {
        idElement: periodoProces.id,
        actionName: id.id,
        descripcion: 'Generar Buro',
      },
    });
  }
  generatePenalizaciones(event: Event, periodoProces: PeriodoProceso): void {
    let id = <Periodo>periodoProces.i_Periodo;

    this.dialog.open(ActionComportamientoComponent, {
      data: {
        idElement: periodoProces.id,
        actionName: id.id,
        descripcion: 'Generar Penalizaciones',
      },
    });
  }

  generateSeguros(event: Event, periodoProces: PeriodoProceso): void {
    let id = <Periodo>periodoProces.i_Periodo;

    this.dialog.open(ActionComportamientoComponent, {
      data: {
        idElement: periodoProces.id,
        actionName: id.id,
        descripcion: 'Generar Seguros',
      },
    });
  }

  generateComisiones(event: Event, periodoProces: PeriodoProceso): void {
    let id = <Periodo>periodoProces.i_Periodo;

    this.dialog.open(ActionComportamientoComponent, {
      data: {
        idElement: periodoProces.id,
        actionName: id.id,
        descripcion: 'Generar Comisiones',
      },
    });
  }

  openDialog(event: Event, ce: ControlEnvio) {
    this.dialog.open(DetalleArchivoComponent, {
      data: {
        id: ce.id,
        name: ce.fileName,
      },
    });
  }

  deleteFiles(event: Event, ce: ControlEnvio) {
    this.dialog.open(ActionComportamientoComponent, {
      data: {
        idElement: ce.id,
        actionName: ce.fileName,
        descripcion: 'Eliminar Comporamiento',
      },
    });
  }

  generaValidacionesFto(event: Event, periodoProces: PeriodoProceso): void {
    let id = <Periodo>periodoProces.i_Periodo;

    this.dialog.open(ActionComportamientoComponent, {
      data: {
        idElement: periodoProces.id,
        actionName: id.id,
        descripcion: 'Generar Validaciones Formato',
      },
    });
  }

  ejecutaValidacionesFto(event: Event, periodoProces: PeriodoProceso): void {
    let id = <Periodo>periodoProces.i_Periodo;

    this.dialog.open(ActionComportamientoComponent, {
      data: {
        idElement: periodoProces.id,
        actionName: id.id,
        descripcion: 'Generar Validaciones',
      },
    });
  }
}

/*


 
  submit() {
    const formData = new FormData();
    formData.append('idCartera', this.idCartera.toString());
    formData.append('file', this.myForm.get('fileSource')?.value);
    formData.append('idCarteraControlComisiones', this.idCartera.toString());

    console.log(formData);
    this.http
      .post(this.comportamientoUrl + 'upload', formData)
      .subscribe((res) => {
        console.log(res);
        alert(Object.values(res));
      });
  }

  getArchivos(event: Event, periodoProces: PeriodoProceso): void {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        cartera: periodoProces.id,
      },
    };

    this.comportamientoService
      .listFilesbyCartera(periodoProces.id)
      .subscribe((files) => {
        this.controlEnvios = files;
      });
  }

  dataProduction(event: Event, periodoProces: PeriodoProceso): void {
    let id = <Periodo>periodoProces.i_Periodo;

    this.dialog.open(ActionComportamientoComponent, {
      data: {
        idElement: periodoProces.id,
        actionName: id.id,
        descripcion: 'Subir Comportamiento',
      },
    });
  }

  generateV9(event: Event, periodoProces: PeriodoProceso): void {
    let id = <Periodo>periodoProces.i_Periodo;

    this.dialog.open(ActionComportamientoComponent, {
      data: {
        idElement: periodoProces.id,
        actionName: id.id,
        descripcion: 'Generar V9',
      },
    });
  }

  generateSaldos(event: Event, periodoProces: PeriodoProceso): void {
    let id = <Periodo>periodoProces.i_Periodo;

    this.dialog.open(ActionComportamientoComponent, {
      data: {
        idElement: periodoProces.id,
        actionName: id.id,
        descripcion: 'Generar Saldos',
      },
    });
  }
  generateBuro(event: Event, periodoProces: PeriodoProceso): void {
    let id = <Periodo>periodoProces.i_Periodo;

    this.dialog.open(ActionComportamientoComponent, {
      data: {
        idElement: periodoProces.id,
        actionName: id.id,
        descripcion: 'Generar Buro',
      },
    });
  }
  generatePenalizaciones(event: Event, periodoProces: PeriodoProceso): void {
    let id = <Periodo>periodoProces.i_Periodo;

    this.dialog.open(ActionComportamientoComponent, {
      data: {
        idElement: periodoProces.id,
        actionName: id.id,
        descripcion: 'Generar Penalizaciones',
      },
    });
  }

  generateSeguros(event: Event, periodoProces: PeriodoProceso): void {
    let id = <Periodo>periodoProces.i_Periodo;

    this.dialog.open(ActionComportamientoComponent, {
      data: {
        idElement: periodoProces.id,
        actionName: id.id,
        descripcion: 'Generar Seguros',
      },
    });
  }

  generateComisiones(event: Event, periodoProces: PeriodoProceso): void {
    let id = <Periodo>periodoProces.i_Periodo;

    this.dialog.open(ActionComportamientoComponent, {
      data: {
        idElement: periodoProces.id,
        actionName: id.id,
        descripcion: 'Generar Comisiones',
      },
    });
  }

  openDialog(event: Event, ce: ControlEnvio) {
    this.dialog.open(DetalleArchivoComponent, {
      data: {
        id: ce.id,
        name: ce.fileName,
      },
    });
  }

  deleteFiles(event: Event, ce: ControlEnvio) {
    this.dialog.open(ActionComportamientoComponent, {
      data: {
        idElement: ce.id,
        actionName: ce.fileName,
        descripcion: 'Eliminar Comporamiento',
      },
    });
  }

  generaValidacionesFto(event: Event, periodoProces: PeriodoProceso): void {
    let id = <Periodo>periodoProces.i_Periodo;

    this.dialog.open(ActionComportamientoComponent, {
      data: {
        idElement: periodoProces.id,
        actionName: id.id,
        descripcion: 'Generar Validaciones Formato',
      },
    });
  }

  ejecutaValidacionesFto(event: Event, periodoProces: PeriodoProceso): void {
    let id = <Periodo>periodoProces.i_Periodo;

    this.dialog.open(ActionComportamientoComponent, {
      data: {
        idElement: periodoProces.id,
        actionName: id.id,
        descripcion: 'Generar Validaciones',
      },
    });
  }
}
*/
