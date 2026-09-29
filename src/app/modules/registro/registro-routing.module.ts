import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegistroInicioComponent } from "./components/registro-inicio/registro-inicio.component";

const routes: Routes = [
  {
    path: "",
    component: RegistroInicioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroRoutingModule {}
