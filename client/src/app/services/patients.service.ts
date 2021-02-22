import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Patient } from '../models/Patient'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  // onde coloco o ip depois
  API_URI = 'http://localhost:3000'

  constructor(private http: HttpClient) { }
  
  getPatients() {
    return this.http.get(`${this.API_URI}/`)
  }

  getPatient(id: string) {
    return this.http.get(`${this.API_URI}/patientes/${id}`)
  }

  savePatients(patient: Patient){
    return this.http.post(`${this.API_URI}/patientes`, patient)
  }

  deletePatient(id:string){
    return this.http.delete(`${this.API_URI}/patientes/${id}`)
  }

  updatePatient(id:string, updatePatient:Patient): Observable<any>{
    return this.http.put(`${this.API_URI}/patientes/${id}`, updatePatient) 
  }
}
