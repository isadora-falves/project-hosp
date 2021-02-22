import { Time } from "@angular/common";

export interface Patient {
    id?: number;
    nome?: string;
    cid_id?:number;
    numero_protuario?:number;
    nome_mae?: string;
    sexo?: string
    data_nascimento?: Date;
    data_diagnostico?: Date;
    criado_em?: Date
}