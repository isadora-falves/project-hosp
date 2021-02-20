"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
class PatientsController {
    index(req, res) {
        database_1.connect();
        res.json({ text: 'API is  Patients' });
    }
}
const patientsController = new PatientsController();
exports.default = patientsController;
//# sourceMappingURL=patientsController.js.map