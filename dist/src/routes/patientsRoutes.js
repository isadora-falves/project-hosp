"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const patientsController_1 = __importDefault(require("../controllers/patientsController"));
class PatientsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        console.log('aqui patientsRoutes');
        console.log(this.router);
        this.router.get('/list', patientsController_1.default.list);
        this.router.get('/list/:id', patientsController_1.default.getOne);
        this.router.post('/create', patientsController_1.default.create);
        this.router.delete('/delete/:id', patientsController_1.default.delete);
        this.router.put('/edit/:id', patientsController_1.default.update);
    }
}
const patientsRoutes = new PatientsRoutes();
exports.default = patientsRoutes.router;
//# sourceMappingURL=patientsRoutes.js.map