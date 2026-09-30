import { Component, Input } from '@angular/core';

@Component({
  selector: 'aviso-legal-formulario',
  templateUrl: './aviso-legal.component.html',
  styleUrls: ['./aviso-legal.component.scss'],
  standalone: false,
})
export class AvisoLegalComponent {
  @Input() icon = 'gavel';
  @Input() title = '';
}
