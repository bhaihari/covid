import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { CountriesComponent } from './countries/countries.component';
import { LocalComponent } from './local/local.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:"", component:DashboardComponent},
    {path:"Home", component:HomeComponent
  },
  {path:"Countries", component: CountriesComponent},
  {path:"Local", component:LocalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
