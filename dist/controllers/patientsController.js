"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class PatientsController {
    index(req, res) {
        res.json({ text: 'patients' });
    }
    list(req, res) {
      console.log('entrei aqui?3')

      return __awaiter(this, void 0, void 0, function* () {
        const all_patients = yield database_1.default.query('SELECT * FROM paciente');
            res.json(all_patients);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const patient = yield database_1.default.query('SELECT * FROM cid WHERE id = ?', [id]);
            if (patient.length > 0) {
                return res.json(patient);
            }
            else {
                res.status(404).json({ text: 'Não existe esse paciente' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO paciente set ?', [req.body]);
            res.json({ message: 'Patient Saved' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM paciente WHERE id = ?', [id]);
            res.json({ message: 'O paciente foi deletado ' + req.params.id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE paciente set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'O paciente foi atualizado' });
        });
    }
}
const patientsController = new PatientsController();
exports.default = patientsController;
//# sourceMappingURL=patientsController.js.map