"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const tipoSchema = new mongoose_1.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, 'EL tipo es necesario']
    }
});
exports.default = mongoose_1.model('Tipo', tipoSchema);
