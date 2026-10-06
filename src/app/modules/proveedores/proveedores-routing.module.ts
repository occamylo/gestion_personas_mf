import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegistroInicioComponent } from "./components/registro-inicio/registro-inicio.component";
import { RegistroPersonaJuridicaComponent } from "./components/registro-persona-juridica/registro-persona-juridica.component";
import { RegistroPersonaNaturalComponent } from "./components/registro-persona-natural/registro-persona-natural.component";

const routes: Routes = [
  {
    path: "",
    component: RegistroInicioComponent,
  },
  {
    path: "registro-persona-juridica",
    component: RegistroPersonaJuridicaComponent,
  },
  {
    path: "registro-persona-natural",
    component: RegistroPersonaNaturalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProveedoresRoutingModule {}
