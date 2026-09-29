import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { RegistroRoutingModule } from "./registro-routing.module";
import { RegistroInicioComponent } from "./components/registro-inicio/registro-inicio.component";

@NgModule({
  declarations: [RegistroInicioComponent],
  imports: [SharedModule, RegistroRoutingModule],
})
export class RegistroModule {}
