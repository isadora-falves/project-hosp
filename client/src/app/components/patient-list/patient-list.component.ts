import { Component, OnInit } from '@angular/core'
import { PatientsService } from '../../services/patients.service'

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})

export class PatientListComponent implements OnInit {

  constructor(private patientsService: PatientsService) { }

  ngOnInit(): void {
    this.patientsService.getPatients().subscribe(
      res => console.log(res),
      err => console.log(err)
    );

    
  }

}
