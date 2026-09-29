import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegistroInicioComponent } from "./components/registro-inicio/registro-inicio.component";
import { RegistroPersonaJuridicaComponent } from "./components/persona-juridica/persona-juridica.component";

const routes: Routes = [
  {
    path: "",
    component: RegistroInicioComponent,
  },
  {
    path: "persona-juridica",
    component: RegistroPersonaJuridicaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroRoutingModule {}
