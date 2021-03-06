import {Request, Response} from 'express';
import pool from '../database';
class PatientsController{

    public index (req: Request,res: Response) {
        res.json({text: 'patients'})
        console.log('auqi?  ')
    }

    public async list(req: Request,res: Response){
        console.log('entrei aqui?1')
        const all_patients = await pool.query('SELECT * FROM paciente')
        res.json(all_patients)
    }
    
    public async getOne(req: Request,res: Response):Promise<any>{
        const { id } =  req.params
        const patient = await pool.query('SELECT * FROM paciente WHERE id = ?', [id]) 
        if (patient.length > 0){
            return res.json(patient)
        }else{
            res.status(404).json({text: 'Não existe esse paciente'})
        }
    }

    public async create(req: Request,res: Response):Promise<void>{
        console.log('entrei no create?');
        await pool.query('INSERT INTO paciente set ?', [req.body])
        res.json({message: 'Patient Saved'})
    }

    public async delete(req: Request,res: Response):Promise<void>{
        const { id } =  req.params
        await pool.query('DELETE FROM paciente WHERE id = ?', [id])
        res.json({message: 'O paciente foi deletado ' + req.params.id})
    }

    public async update(req: Request,res: Response):Promise<void>{
        const { id } =  req.params
        await pool.query('UPDATE paciente set ? WHERE id = ?',[req.body, id])
        res.json({message: 'O paciente foi atualizado'})
    }
}

const patientsController = new PatientsController();
export default patientsController;
