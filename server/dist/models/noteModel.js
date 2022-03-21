"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const noteSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_2.default.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    ticket: {
        type: mongoose_2.default.Schema.Types.ObjectId,
        required: true,
        ref: "Ticket",
    },
    text: {
        type: String,
        require: [true, "Please add some text"],
    },
    isStaff: {
        type: Boolean,
        default: false,
    },
    staffId: {
        type: String,
    },
}, {
    timestamps: true,
});
const Note = (0, mongoose_1.model)("Note", noteSchema);
exports.default = Note;
