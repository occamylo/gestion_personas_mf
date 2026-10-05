import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-registro-persona-natural-paso-2",
  templateUrl: "./registro-persona-natural-paso-2.component.html",
  styleUrls: ["./registro-persona-natural-paso-2.component.scss"],
  standalone: false,
})
export class RegistroPersonaNaturalPaso2Component {
  @Input({ required: true }) afiliacionesFinanzasForm!: FormGroup;

  readonly opcionesSiNo = [
  { value: "no", label: "No, cotizante activo" },
  { value: "si", label: "Sí, pensionado" },
];

  readonly opcionesEps = [
    { value: "compensar", label: "Compensar E.P.S. (Código EPS008)" },
    { value: "sura", label: "EPS Sura (Código EPS010)" },
    { value: "sanitas", label: "EPS Sanitas (Código EPS005)" },
    { value: "nueva_eps", label: "Nueva EPS (Código EPS037)" },
    { value: "famisanar", label: "Famisanar EPS (Código EPS017)" },
    { value: "salud_total", label: "Salud Total EPS (Código EPS002)" },
  ];

  readonly opcionesAfp = [
    { value: "porvenir", label: "Porvenir S.A. - Fondo de Pensiones Obligatorias" },
    { value: "proteccion", label: "Protección S.A." },
    { value: "colpensiones", label: "Colpensiones (Régimen de Prima Media RPM)" },
    { value: "colfondos", label: "Colfondos Pensiones y Cesantías" },
    { value: "skandia", label: "Skandia Fondo de Pensiones" },
  ];

  readonly opcionesCcf = [
    { value: "compensar_ccf", label: "Compensar Caja de Compensación Familiar" },
    { value: "colsubsidio", label: "Colsubsidio" },
    { value: "cafam", label: "Cafam" },
    { value: "comfacundi", label: "Comfacundi" },
    { value: "ninguna", label: "Ninguna / No realiza aportes a caja de compensación" },
  ];

  readonly opcionesEntidadesBancarias = [
    { value: "davivienda", label: "Banco Davivienda S.A. (051)" },
    { value: "bancolombia", label: "Bancolombia S.A. (007)" },
    { value: "bogota", label: "Banco de Bogotá (001)" },
    { value: "bbva", label: "BBVA Colombia (013)" },
    { value: "occidente", label: "Banco de Occidente (023)" },
    { value: "popular", label: "Banco Popular (002)" },
  ];

  readonly opcionesTipoCuenta = [
    { value: "ahorros", label: "Cuenta de Ahorros" },
    { value: "corriente", label: "Cuenta Corriente" },
  ];

  esInvalido(controlName: string): boolean {
    const control = this.afiliacionesFinanzasForm.get(controlName);
    return !!control && control.invalid && control.touched;
  }
}
