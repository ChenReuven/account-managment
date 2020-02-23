import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccountsPageComponent } from "./modules/account/pages/accounts-page/accounts-page.component";

const routes: Routes = [
  {
    path: "accounts",
    component: AccountsPageComponent
  },
  { path: "", redirectTo: "/accounts", pathMatch: "full" },
  {
    path: "**",
    component: AccountsPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
