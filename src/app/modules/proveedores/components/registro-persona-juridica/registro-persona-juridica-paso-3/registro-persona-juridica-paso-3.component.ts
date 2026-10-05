import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

interface DocumentoSoporte {
  control: string;
  icono: string;
  titulo: string;
  descripcion: string;
  accion: string;
}

@Component({
  selector: 'registro-persona-juridica-paso-3',
  templateUrl: './registro-persona-juridica-paso-3.component.html',
  styleUrls: ['./registro-persona-juridica-paso-3.component.scss'],
  standalone: false,
})
export class RegistroPersonaJuridicaPaso3Component {
  @Input() formulario: FormGroup = new FormGroup({});
  @Output() formularioChange = new EventEmitter<FormGroup>();

  documentosExistencia: DocumentoSoporte[] = [
    {
      control: 'rutArchivo',
      icono: 'picture_as_pdf',
      titulo: 'Registro Único Tributario (RUT)',
      descripcion: 'Documento vigente validado contra la DIAN.',
      accion: 'Reemplazar',
    },
    {
      control: 'certificadoExistenciaArchivo',
      icono: 'description',
      titulo: 'Certificado de Existencia y Representación',
      descripcion: 'Expedido por Cámara de Comercio o RUES.',
      accion: 'Actualizar',
    },
    {
      control: 'cedulaRepresentanteArchivo',
      icono: 'badge',
      titulo: 'Cédula del Representante Legal',
      descripcion: 'Documento de identidad del representante vigente.',
      accion: 'Reemplazar',
    },
  ];

  estadosRup = [
    { label: 'Sí (Activo)', value: true },
    { label: 'No (No cuenta con RUP)', value: false },
  ];

  soportesParafiscales: DocumentoSoporte[] = [
    {
      control: 'certificadoParafiscales',
      icono: 'description',
      titulo: 'Certificación de Aportes',
      descripcion: 'Soporte firmado por Revisor Fiscal.',
      accion: 'Ver certificación',
    },
  ];

  actualizarEstadoRup(valor: boolean): void {
    this.formulario.get('tieneRup')?.setValue(valor);
    this.formularioChange.emit(this.formulario);
  }

  emitirCambio(): void {
    this.formularioChange.emit(this.formulario);
  }
}
