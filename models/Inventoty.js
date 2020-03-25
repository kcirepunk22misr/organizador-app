"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const inventorySchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    crearedAt: {
        type: Date,
        required: [true],
        default: new Date().getFullYear()
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'El id del usuario es necesario']
    },
    marcaId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Caracteristica',
        required: [true, 'El ID de la marca es necesario']
    },
    typeId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Caracteristica',
        required: [true, 'El ID del tipo es necesario']
    },
    groupId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Caracteristica',
        required: [true, 'EL ID del grupo es necesario']
    },
    locationId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Location',
        required: [true, 'El ID de la ubicacion es necesario']
    },
    state: {
        type: String,
        required: [true, 'El estado de la herramienta es necesario']
    },
    quantify: {
        type: Number,
        required: [true, 'La cantidad es requeridad']
    },
    img: {
        type: String,
        required: false
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    }
});
