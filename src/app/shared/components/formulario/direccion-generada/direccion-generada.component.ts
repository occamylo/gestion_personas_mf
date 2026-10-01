import { Component, Input } from '@angular/core';

@Component({
  selector: 'direccion-generada',
  templateUrl: './direccion-generada.component.html',
  styleUrls: ['./direccion-generada.component.scss'],
  standalone: false,
})
export class DireccionGeneradaComponent {
  @Input() direccion = '';
  @Input() estado = 'Nomenclatura Validada';
}
