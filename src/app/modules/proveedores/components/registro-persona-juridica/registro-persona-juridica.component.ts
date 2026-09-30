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
    { numero: 1, icono: "person", nombre: "Datos Societarios y Representación" },
    { numero: 2, icono: "account_balance", nombre: "Información Financiera" },
    { numero: 3, icono: "description", nombre: "Documentos, RUES y RUP" },
    { numero: 4, icono: "assignment", nombre: "Actividad y Declaración" },
  ];

  finalizar() {
    alert("Se ha presionado el botón Finalizar. Se puede redirigir a otra página o mostrar un mensaje de éxito.");
  }

}
