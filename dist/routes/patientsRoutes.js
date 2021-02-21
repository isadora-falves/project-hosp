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
        "/patientes";
        this.router.get('/', patientsController_1.default.list);
        this.router.get('/:id', patientsController_1.default.getOne);
        this.router.post('/', patientsController_1.default.create);
        this.router.delete('/:id', patientsController_1.default.delete);
        this.router.put('/:id', patientsController_1.default.update);
        // falta o list
    }
}
const patientsRoutes = new PatientsRoutes();
exports.default = patientsRoutes.router;
//# sourceMappingURL=patientsRoutes.js.map