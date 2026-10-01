import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'barra-acciones-formulario',
  templateUrl: './barra-acciones.component.html',
  styleUrls: ['./barra-acciones.component.scss'],
  standalone: false,
})
export class BarraAccionesComponent {
  @Input() mostrarRegreso = false;
  @Input() esUltimoPaso = false;
  @Output() regreso = new EventEmitter<void>();
  @Output() guardar = new EventEmitter<void>();
  @Output() continuar = new EventEmitter<void>();
  @Output() finalizar = new EventEmitter<void>();
}
