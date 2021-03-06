import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PatientsService } from '../../services/patients.service';
@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})

export class PatientListComponent implements OnInit {

  patients:any = [];
  queryField =  new FormControl();
  patient_show:any = [];
  // qrdata!: string;
  
  
  constructor(private patientsService: PatientsService) { 
    // this.qrdata = this.patient_show;
    // console.log(this.qrdata)
    }
  
  ngOnInit(): void {
    console.log('entrei no')
    
    this.patientsService.getPatients().subscribe(
      res =>{
        this.patients = res;
        
        console.log(this.patients)
      },
      err => console.log(err)
      );}
      
  // open(content:any, paciente:any) {
  //   this.modalService.open(content);
  //   this.patient_show = paciente;
  //   this.qrdata = paciente.id.toString();
  // }
  
  pesquisar(): void{
    console.log(this.queryField.value)
  }


}
