import { Router } from 'express';
import patientsController  from '../controllers/patientsController';

class PatientsRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        console.log('aqui patientsRoutes')  
        console.log(this.router)
        this.router.get('/list', patientsController.list);
        this.router.get('/list/:id', patientsController.getOne);
        this.router.post('/create', patientsController.create);
        this.router.delete('/delete/:id', patientsController.delete);
        this.router.put('/edit/:id', patientsController.update);
    }
}

const patientsRoutes = new PatientsRoutes();
export default patientsRoutes.router;

