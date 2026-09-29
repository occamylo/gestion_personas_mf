import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from "@angular/core";
import { SafeHtml } from "@angular/platform-browser";

/**
 * Componente que actúa como una plantilla contenedora.
 * Permite mostrar un encabezado, un botón opcional, y contenido personalizado a través de un `TemplateRef`.
 */
@Component({
    selector: "plantilla-tarjeta-contenedora",
    templateUrl: "./plantilla-tarjeta-contenedora.component.html",
    styleUrls: ["./plantilla-tarjeta-contenedora.component.scss"],
    standalone: false
})
export class PlantillaTarjetaContenedoraComponent {

  /**
   * Icono que se muestra en el encabezado de la tarjeta.
   * @default ""
   * @example "home"
   */
  @Input() icon: string = "";

  /**
   * Título que se muestra en el encabezado de la tarjeta.
   * @default ""
   * @example "Mi Título Personalizado"
   */
  @Input() title: string = "";

   /**
   * Descripción que se muestra en el encabezado de la tarjeta.
   * @default ""
   * @example "Mi Descripción Personalizada"
   */
   @Input() description: string = "";

  /**
   * Contenido dinámico que será renderizado dentro de la tarjeta.
   * Debe ser un TemplateRef que se define en el componente padre.
   * @example
   * <ng-template #miTemplate>
   *   <p>Este es el contenido dinámico</p>
   * </ng-template>
   * <plantilla-tarjeta-contenedora [contenido]="miTemplate"></plantilla-pagina-contenedora>
   */
  @Input() contenido!: TemplateRef<any>;

}
