import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

interface Actividad {
  codigo: string;
  nombre: string;
  principal?: boolean;
}

interface Declaracion {
  value: string;
  label: string;
}

@Component({
  selector: 'registro-persona-juridica-paso-4',
  templateUrl: './registro-persona-juridica-paso-4.component.html',
  styleUrls: ['./registro-persona-juridica-paso-4.component.scss'],
  standalone: false,
})
export class RegistroPersonaJuridicaPaso4Component {
  @Input() formulario: FormGroup = new FormGroup({});
  @Output() formularioChange = new EventEmitter<FormGroup>();

  actividadesCiiu: Actividad[] = [
    { codigo: '6201', nombre: 'Actividades de desarrollo de sistemas informáticos', principal: true },
    { codigo: '6202', nombre: 'Actividades de consultoría informática y gestión de instalaciones informáticas' },
    { codigo: '6209', nombre: 'Otras actividades de tecnologías de información y servicios de computación' },
  ];

  codigosUnspsc = [
    { codigo: '43211500', nombre: 'Computadores y estaciones de trabajo' },
    { codigo: '81111500', nombre: 'Ingeniería y arquitectura de software' },
    { codigo: '81112200', nombre: 'Mantenimiento y soporte técnico TIC' },
    { codigo: '43222600', nombre: 'Equipos de redes de datos y telecomunicación' },
  ];

  declaraciones: Declaracion[] = [
    { value: 'veracidad', label: 'La información suministrada es veraz, completa y está actualizada.' },
    { value: 'inhabilidades', label: 'La sociedad y sus representantes no están incursos en inhabilidades o incompatibilidades.' },
    { value: 'sagrilaft', label: 'La sociedad autoriza las validaciones institucionales de cumplimiento y prevención de riesgos.' },
  ];

  get cantidadCaracteres(): number {
    return String(this.formulario.get('descripcionServicios')?.value ?? '').length;
  }

  estaDeclaracionSeleccionada(valor: string): boolean {
    return this.formulario.get('declaraciones')?.value?.includes(valor) ?? false;
  }

  cambiarDeclaracion(valor: string, seleccionada: boolean): void {
    const declaraciones = this.formulario.get('declaraciones')?.value ?? [];
    const actualizadas = seleccionada
      ? [...declaraciones, valor]
      : declaraciones.filter((declaracion: string) => declaracion !== valor);

    this.formulario.get('declaraciones')?.setValue([...new Set(actualizadas)]);
    this.emitirCambio();
  }

  emitirCambio(): void {
    this.formularioChange.emit(this.formulario);
  }
}
