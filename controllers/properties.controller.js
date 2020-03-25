"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Type_1 = __importDefault(require("../models/Type"));
class PropertiesController {
    saveType(req, res) {
        let name = req.body.name;
        const type = new Type_1.default({
            name
        });
        type.save((err, typeDB) => {
            if (err)
                return res.status(400).json({
                    ok: false,
                    message: 'Error al crear tipos de herramientas',
                    err
                });
            res.status(201).json({
                ok: true,
                message: 'Tipo Guardado exitosamente',
                type: typeDB
            });
        });
    }
}
