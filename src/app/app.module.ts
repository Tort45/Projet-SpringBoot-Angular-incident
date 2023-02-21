import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IncidentListingComponent } from './incident-listing/incident-listing.component';
import { IncidentAjoutComponent } from './incident-ajout/incident-ajout.component';
import { IncidentConsultComponent } from './incident-consult/incident-consult.component';
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import {MenuComponent} from "./menu/menu.component";
import { IncidentComponent } from './incident/incident.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';

const routes : Routes = [
  {path: 'incidents', component: IncidentListingComponent},
  {path: 'incidents/add', component: IncidentAjoutComponent},
  {path: 'incidents/:id', component: IncidentConsultComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    IncidentListingComponent,
    IncidentAjoutComponent,
    IncidentConsultComponent,
    MenuComponent,
    IncidentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
