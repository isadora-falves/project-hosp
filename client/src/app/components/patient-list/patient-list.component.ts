import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PatientsService } from '../../services/patients.service';
import { NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {jsPDF} from 'jspdf';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
  providers: [NgbModalConfig, NgbModal]
})

export class PatientListComponent implements OnInit {

  patients:any = [];
  queryField =  new FormControl();
  patient_show:any = [];
  qrdata!: string;
  
  
  constructor (private patientsService: PatientsService, private modalService: NgbModal, private config: NgbModalConfig ) { 
    this.qrdata = this.patient_show;
    config.backdrop = 'static';
    config.keyboard = false;
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
      
  open(content:any, paciente:any) {
    this.modalService.open(content);
    this.patient_show = paciente;
    this.qrdata = paciente.id.toString();
  }
  
  pesquisar(): void{
    console.log(this.queryField.value)
  }

  // gerarPDF(paciente:any) {
  //   console.log('entrei aqui ahsuduashd')
  //   let documento = new jsPDF();
  //   documento.setFont("Courier");
  //   documento.setFontSize(20);
  //   documento.text("Ficha do produto", 65, 15);
  
  //   documento.setFillColor(50,50,50);
  
  //   documento.setTextColor(0, 0, 0);
  //   documento.text("Identificador:"+paciente.id.toString(), 42, 25);
  //   documento.text("", 42, 33);
  //   documento.text("R$ 2400,00", 42, 41);
  //   // documento.text(paciente.id.toString(), 20, 20);

    
  //   documento.output("dataurlnewwindow");
  // }

}
