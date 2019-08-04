import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FondateurComponent } from './fondateur/fondateur.component';
import { FondEcranComponent } from './fond-ecran/fond-ecran.component';
import { LieuxComponent } from './lieux/lieux.component';
import { CtMetragesComponent } from './ct-metrages/ct-metrages.component';
import { LgMetragesComponent } from './lg-metrages/lg-metrages.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    FondateurComponent,
    FondEcranComponent,
    LieuxComponent,
    CtMetragesComponent,
    LgMetragesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }