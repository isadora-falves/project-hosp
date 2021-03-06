"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
let PatientListComponent = class PatientListComponent {
    // qrdata!: string;
    constructor(patientsService) {
        this.patientsService = patientsService;
        this.patients = [];
        this.queryField = new forms_1.FormControl();
        this.patient_show = [];
        // this.qrdata = this.patient_show;
        // console.log(this.qrdata)
    }
    ngOnInit() {
        console.log('entrei no');
        this.patientsService.getPatients().subscribe(res => {
            this.patients = res;
            console.log(this.patients);
        }, err => console.log(err));
    }
    // open(content:any, paciente:any) {
    //   this.modalService.open(content);
    //   this.patient_show = paciente;
    //   this.qrdata = paciente.id.toString();
    // }
    pesquisar() {
        console.log(this.queryField.value);
    }
};
PatientListComponent = __decorate([
    core_1.Component({
        selector: 'app-patient-list',
        templateUrl: './patient-list.component.html',
        styleUrls: ['./patient-list.component.css']
    })
], PatientListComponent);
exports.PatientListComponent = PatientListComponent;
//# sourceMappingURL=patient-list.component.js.map