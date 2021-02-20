import { Router } from 'express';
import patientsController  from '../controllers/patientsController';

class PatientsRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', patientsController.index);
    }
}

const patientsRoutes = new PatientsRoutes();
export default patientsRoutes.router;