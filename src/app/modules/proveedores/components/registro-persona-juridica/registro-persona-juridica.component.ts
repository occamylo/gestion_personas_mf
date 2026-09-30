import { Component } from "@angular/core";
import { PasoStepperVisual } from "src/app/shared/components/stepper-visual/stepper-visual.component";

@Component({
  selector: "app-registro-persona-juridica",
  templateUrl: "./registro-persona-juridica.component.html",
  styleUrls: ["./registro-persona-juridica.component.scss"],
  standalone: false,
})
export class RegistroPersonaJuridicaComponent {
  titulo = "Módulo de Registro de Persona Jurídica";
  pasoActual = 1;

  pasos: PasoStepperVisual[] = [
    { numero: 1, icono: "person", nombre: "Datos societarios y representación" },
    { numero: 2, nombre: "Información financiera" },
    { numero: 3, nombre: "Documentos, RUES y RUP" },
    { numero: 4, nombre: "Actividad y declaración" },
  ];

}
