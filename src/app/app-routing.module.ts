import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { APP_BASE_HREF } from "@angular/common";

const routes: Routes = [
  {
    path: "proveedores",
    loadChildren: () =>
      import("./modules/proveedores/proveedores-module").then(
        (m) => m.ProveedoresModule
      ),
  },
  {
    path: "",
    redirectTo: "proveedores",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: "/agora-gestion-personas/" }],
})
export class AppRoutingModule {}
