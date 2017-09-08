/**
 * Created by consultadd on 17/11/16.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchPageComponent} from "./search-page/search-page.component";

export const routes: Routes = [

  {
    path: "",
    component:SearchPageComponent

  }
  // {
  //   path: "genre",
  //   component:GenreComponent
  //
  // },
  // {
  //   path: "addtrack",
  //   component:AddNewTrackComponent
  //
  // },
  // {
  //   path: "edittrack/:id",
  //   component:AddNewTrackComponent
  //
  // },

];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
