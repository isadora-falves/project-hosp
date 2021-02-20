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
        this.router.get('/', patientsController_1.default.index);
    }
}
const patientsRoutes = new PatientsRoutes();
exports.default = patientsRoutes.router;
//# sourceMappingURL=patientsRoutes.js.map