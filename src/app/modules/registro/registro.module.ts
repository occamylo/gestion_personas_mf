import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { RegistroRoutingModule } from "./registro-routing.module";
import { RegistroInicioComponent } from "./components/registro-inicio/registro-inicio.component";
import { RegistroPersonaJuridicaComponent } from "./components/persona-juridica/persona-juridica.component";

@NgModule({
  declarations: [
    RegistroInicioComponent,
    RegistroPersonaJuridicaComponent,
  ],
  imports: [
    SharedModule,
    RegistroRoutingModule
  ],
})
export class RegistroModule {}
