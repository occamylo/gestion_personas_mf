import { Component, Input } from "@angular/core";

/**
 * Componente que actúa como una plantilla contenedora.
 * Permite mostrar un encabezado, un botón opcional y contenido personalizado proyectado.
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

}
