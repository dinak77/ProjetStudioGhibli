import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FondateurComponent } from './fondateur/fondateur.component';
import { FondEcranComponent } from './fond-ecran/fond-ecran.component';
import { LieuxComponent } from './lieux/lieux.component';
import {CtMetragesComponent } from './ct-metrages/ct-metrages.component';

const routes: Routes = [

    { path: '', redirectTo:'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'fondateur', component: FondateurComponent},
    { path: 'fond-ecran', component: FondEcranComponent},
    { path: 'lieux', component: LieuxComponent },
    { path: 'CtMetrages', component: CtMetragesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }