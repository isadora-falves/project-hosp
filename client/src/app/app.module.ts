import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PatientFormComponent } from './components/patient-form/patient-form.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { HttpClientModule } from '@angular/common/http'
import { PatientsService } from './services/patients.service'
import { ReactiveFormsModule } from '@angular/forms'; 


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PatientFormComponent,
    PatientListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    ReactiveFormsModule
  ],
  providers: [
    PatientsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
