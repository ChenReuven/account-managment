import { Routes } from "@angular/router";
import { AccountsPageComponent } from "../modules/account/pages/accounts-page/accounts-page.component";
import { APP_ROUTE_PATHS } from "../constants/app-routes-paths.const";

export const appRoutes: Routes = [
  {
    path: APP_ROUTE_PATHS.accounts,
    component: AccountsPageComponent
  },
  { path: APP_ROUTE_PATHS.default, redirectTo: `/${APP_ROUTE_PATHS.accounts}`, pathMatch: APP_ROUTE_PATHS.fullPathMatch }
];
