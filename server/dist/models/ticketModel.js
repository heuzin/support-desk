"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const ticketSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_2.default.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    product: {
        type: String,
        require: [true, "Please select a product"],
        enum: ["iPhone", "Mackbook Pro", "iMac", "iPad"],
    },
    description: {
        type: String,
        required: [true, "Please enter a description of the issue"],
    },
    status: {
        type: String,
        required: true,
        enum: ["new", "open", "closed"],
        default: "new",
    },
}, {
    timestamps: true,
});
const Ticket = (0, mongoose_1.model)("Ticket", ticketSchema);
exports.default = Ticket;
