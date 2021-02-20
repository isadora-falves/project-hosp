import {Request, Response} from 'express';
import {connect} from '../database';


class PatientsController{

    public index (req: Request,res: Response) {
        connect();
        res.json({text: 'API is  Patients'})
    }
}

const patientsController = new PatientsController();
export default patientsController;
