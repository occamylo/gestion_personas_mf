import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { ProveedoresRoutingModule } from "./proveedores-routing.module";
import { RegistroInicioComponent } from "./components/registro-inicio/registro-inicio.component";
import { RegistroPersonaJuridicaComponent } from "./components/registro-persona-juridica/registro-persona-juridica.component";

@NgModule({
  declarations: [
    RegistroInicioComponent,
    RegistroPersonaJuridicaComponent,
  ],
  imports: [
    SharedModule,
    ProveedoresRoutingModule
  ],
})
export class ProveedoresModule {}
