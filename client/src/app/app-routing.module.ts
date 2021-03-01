import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientListComponent } from './components/patient-list/patient-list.component'
import { NavigationComponent } from './components/navigation/navigation.component'
import { PatientFormComponent } from './components/patient-form/patient-form.component'

const routes: Routes = [
  {
    path:'',
    redirectTo: '/',
    pathMatch: 'full'
    
  },
  {
    path:'home',
    component: NavigationComponent
  },
  {
    path: 'pacientes/list',
    component: PatientListComponent
  },
  {
    path: 'pacientes/create',
    component: PatientFormComponent
  },
  {
    path: 'pacientes/edit/:id',
    component: PatientFormComponent
  },
  {
    path: 'pacientes/delete/:id',
    component: PatientFormComponent
  },
  {
    path: 'pacientes/list/:id',
    component: PatientListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
