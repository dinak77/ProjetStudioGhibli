import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FondateurComponent } from './fondateur/fondateur.component';
import { FondEcranComponent } from './fond-ecran/fond-ecran.component';
import { LieuxComponent } from './lieux/lieux.component';
import { CtMetragesComponent } from './ct-metrages/ct-metrages.component';
import { LgMetragesComponent } from './lg-metrages/lg-metrages.component';
import { MiyazakiComponent } from './miyazaki/miyazaki.component';
import { TakahataComponent } from './takahata/takahata.component';

const routes: Routes = [

    { path: '', redirectTo:'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'fondateur', component: FondateurComponent},
    { path: 'fond-ecran', component: FondEcranComponent},
    { path: 'lieux', component: LieuxComponent },
    { path: 'CtMetrages', component: CtMetragesComponent },
    { path: 'LgMetrages', component: LgMetragesComponent },
    { path: 'Miyazaki', component: MiyazakiComponent },
    { path: 'Takahata', component: TakahataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }