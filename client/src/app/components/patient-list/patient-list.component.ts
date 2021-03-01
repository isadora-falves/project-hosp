import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms';
import { PatientsService } from '../../services/patients.service'
import { NgxQRCodeModule } from 'ngx-qrcode2';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})

export class PatientListComponent implements OnInit {

  patients:any = [];
  queryField =  new FormControl();

  teste = 
    {
      "nome": "Isadora Alves",
      "cid_id": 1,
      "numero_protuario": 1 ,
      "nome_mae": "Luciene Moreira",
      "sexo": "f"
  }

  constructor(private patientsService: PatientsService) { }

  ngOnInit(): void {
    console.log('entrei no')
    
    this.patientsService.getPatients().subscribe(
      res =>{
        this.patients = res;
        
        console.log(this.patients)
      },
      err => console.log(err)
    );}

    
  
  
  pesquisar(): void{
    console.log(this.queryField.value)
  }


}
