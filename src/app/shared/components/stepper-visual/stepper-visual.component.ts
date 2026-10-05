import { Component, EventEmitter, Input, Output } from "@angular/core";

export interface PasoStepperVisual {
  numero: number;
  icono?: string;
  nombre: string;
}

@Component({
  selector: "stepper-visual",
  templateUrl: "./stepper-visual.component.html",
  styleUrls: ["./stepper-visual.component.scss"],
  standalone: false,
})
export class StepperVisualComponent {

  /**
   * Etiqueta para el elemento de navegación del stepper visual, utilizada para accesibilidad.
   * @default "Progreso"
   * @example "Progreso del procedimiento"
   */
  @Input() label: string = "Progreso";

  /**
   * Número del paso actual en el stepper visual. Este valor determina qué paso se encuentra activo.
   * 
   */
  @Input() pasoActual!: number;
  @Output() pasoActualChange = new EventEmitter<number>();

  /**
   * Lista de pasos que conforman el stepper visual. Cada paso debe incluir un número, un nombre y un icono.
   * @example
   * ```
   * [{ numero: 1, nombre: "Datos personales", icono: "person" }, { numero: 2, nombre: "Información financiera", icono: "account_balance" }]
   * ```
   */
  @Input() pasos: PasoStepperVisual[] = [
    {
      numero: 1,
      nombre: "Identificación y Caracterización",
    },
    {
      numero: 2,
      nombre: "Afiliaciones y Finanzas",
    },
    {
      numero: 3,
      nombre: "Documentos y RUT",
    },
    {
      numero: 4,
      nombre: "Actividad y Declaración",
    },
  ];

  /**
   * Selecciona un paso del stepper visual.
   * @param numero Número del paso a seleccionar. Este valor debe coincidir con el número de uno de los pasos definidos en la propiedad `pasos`.
   */
  seleccionarPaso(numero: number): void {
    this.pasoActualChange.emit(numero);
  }

}
