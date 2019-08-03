import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FondateurComponent } from './fondateur/fondateur.component';

const routes: Routes = [

    { path: '', redirectTo:'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'fondateur', component: FondateurComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }