import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { ProveedoresRoutingModule } from "./proveedores-routing.module";
import { RegistroInicioComponent } from "./components/registro-inicio/registro-inicio.component";
import { RegistroPersonaJuridicaComponent } from "./components/registro-persona-juridica/registro-persona-juridica.component";
import { RegistroPersonaJuridicaPaso1Component } from "./components/registro-persona-juridica/registro-persona-juridica-paso-1/registro-persona-juridica-paso-1.component";
import { RegistroPersonaJuridicaPaso2Component } from "./components/registro-persona-juridica/registro-persona-juridica-paso-2/registro-persona-juridica-paso-2.component";
import { RegistroPersonaJuridicaPaso3Component } from "./components/registro-persona-juridica/registro-persona-juridica-paso-3/registro-persona-juridica-paso-3.component";
import { RegistroPersonaJuridicaPaso4Component } from "./components/registro-persona-juridica/registro-persona-juridica-paso-4/registro-persona-juridica-paso-4.component";

@NgModule({
  declarations: [
    RegistroInicioComponent,
    RegistroPersonaJuridicaComponent,
    RegistroPersonaJuridicaPaso1Component,
    RegistroPersonaJuridicaPaso2Component,
    RegistroPersonaJuridicaPaso3Component,
    RegistroPersonaJuridicaPaso4Component,
  ],
  imports: [
    SharedModule,
    ProveedoresRoutingModule
  ],
})
export class ProveedoresModule {}
