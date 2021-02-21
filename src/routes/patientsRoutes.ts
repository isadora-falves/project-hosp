import { Router } from 'express';
import patientsController  from '../controllers/patientsController';

class PatientsRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        "/patientes"
        this.router.get('/', patientsController.list);
        this.router.get('/:id', patientsController.getOne);
        this.router.post('/', patientsController.create);
        this.router.delete('/:id', patientsController.delete);
        this.router.put('/:id', patientsController.update);
// falta o list
    }
}

const patientsRoutes = new PatientsRoutes();
export default patientsRoutes.router;

