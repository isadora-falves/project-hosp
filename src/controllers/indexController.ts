import {Request, Response} from 'express';

class IndexController{

    index (req: Request,res: Response) {
        res.json({text: 'olaaaa'})
    }
}

export const indexController = new IndexController();