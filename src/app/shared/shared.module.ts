import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MaterialModule } from "./modules/material.module";
import { IconosModule } from "./modules/iconos.module";
import { PlantillaPaginaContenedoraComponent } from "./components/templates/plantilla-pagina-contenedora/plantilla-pagina-contenedora.component";
import { PlantillaTarjetaContenedoraComponent } from "./components/templates/plantilla-tarjeta-contenedora/plantilla-tarjeta-contenedora.component";

@NgModule({
  declarations: [
    PlantillaPaginaContenedoraComponent,
    PlantillaTarjetaContenedoraComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    IconosModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    MaterialModule,
    IconosModule,
    PlantillaPaginaContenedoraComponent,
    PlantillaTarjetaContenedoraComponent,
  ],
})
export class SharedModule {}
