import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import {
  AccionConsentimiento,
  ContenidoConsentimiento,
  CONTENIDO_CONSENTIMIENTO,
  VistaConsentimiento,
} from "./consentimiento.utilidades";

export interface DatosConsentimientoDialog {
  vista: VistaConsentimiento;
}

@Component({
  selector: "app-consentimiento-dialog",
  templateUrl: "./consentimiento-dialog.component.html",
  styleUrls: ["./consentimiento-dialog.component.scss"],
  standalone: false,
})
export class ConsentimientoDialogComponent {
  readonly contenido: ContenidoConsentimiento;

  constructor(
    private readonly dialogRef: MatDialogRef<
      ConsentimientoDialogComponent,
      AccionConsentimiento
    >,
    @Inject(MAT_DIALOG_DATA) datos: DatosConsentimientoDialog
  ) {
    this.contenido = CONTENIDO_CONSENTIMIENTO[datos.vista];
  }

  accion(accion: AccionConsentimiento): void {
    this.dialogRef.close(accion);
  }
}
