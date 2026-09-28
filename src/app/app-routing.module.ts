import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { APP_BASE_HREF } from "@angular/common";

const routes: Routes = [
  {
    path: "registro",
    loadChildren: () =>
      import("./modules/registro/registro.module").then(
        (m) => m.RegistroModule
      ),
  },
  {
    path: "",
    redirectTo: "registro",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: "/agora-gestion-personas/" }],
})
export class AppRoutingModule {}
