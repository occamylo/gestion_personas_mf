import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'registro-persona-juridica-paso-1',
  templateUrl: './registro-persona-juridica-paso-1.component.html',
  styleUrls: ['./registro-persona-juridica-paso-1.component.scss'],
  standalone: false,
})
export class RegistroPersonaJuridicaPaso1Component {

  @Input() formulario: FormGroup = new FormGroup({});
  @Output() formularioChange = new EventEmitter<FormGroup>();

}
