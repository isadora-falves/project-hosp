"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
// import { Observable } from 'rxjs';
let PatientsService = class PatientsService {
    constructor(http) {
        this.http = http;
        // onde coloco o ip depois
        this.API_URI = 'http://localhost:3000';
    }
    getPatients() {
        console.log('entrei no getPatients--->');
        return this.http.get(`${this.API_URI}/pacientes/list`);
    }
    getPatient(id) {
        return this.http.get(`${this.API_URI}/pacientes/${id}`);
    }
    savePatients(patient) {
        console.log(patient);
        return this.http.post(`${this.API_URI}/pacientes/create`, patient);
    }
    deletePatient(id) {
        return this.http.delete(`${this.API_URI}/pacientes/delete/${id}`);
    }
};
PatientsService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    })
], PatientsService);
exports.PatientsService = PatientsService;
//# sourceMappingURL=patients.service.js.map