import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientListComponent } from './components/patient-list/patient-list.component'
const routes: Routes = [
  {
    path:'',
    redirectTo: '/patientes',
    pathMatch: 'full'
  },
  {
    path:'patientes',
    component: PatientListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
