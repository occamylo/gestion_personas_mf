import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-registro-persona-natural-paso-1",
  templateUrl: "./registro-persona-natural-paso-1.component.html",
  styleUrls: ["./registro-persona-natural-paso-1.component.scss"],
  standalone: false,
})
export class RegistroPersonaNaturalPaso1Component {
  @Input({ required: true }) identificacionForm!: FormGroup;
  @Input({ required: true }) caracterizacionForm!: FormGroup;
  @Input({ required: true }) experienciaForm!: FormGroup;
  @Input({ required: true }) tributarioForm!: FormGroup;
  @Input({ required: true }) residenciaForm!: FormGroup;
  @Input({ required: true }) contactoForm!: FormGroup;

  incrementarMeses(
    controlName: "experienciaLaboralTotal" | "experienciaProfesional"
  ): void {
    const control = this.experienciaForm.get(controlName);

    if (!control) {
      return;
    }

    const valorActual = Number(control.value) || 0;
    control.setValue(valorActual + 1);
    control.markAsDirty();
  }

  decrementarMeses(
    controlName: "experienciaLaboralTotal" | "experienciaProfesional"
  ): void {
    const control = this.experienciaForm.get(controlName);

    if (!control) {
      return;
    }

    const valorActual = Number(control.value) || 0;
    control.setValue(Math.max(0, valorActual - 1));
    control.markAsDirty();
  }
}
