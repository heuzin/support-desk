"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNote = exports.getNotes = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const userModel_1 = __importDefault(require("../models/userModel"));
const ticketModel_1 = __importDefault(require("../models/ticketModel"));
const noteModel_1 = __importDefault(require("../models/noteModel"));
// @desc    Get notes for a ticket
// @route   GET /api/tickets/:ticketId/notes
// @access  Private
exports.getNotes = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const user = yield userModel_1.default.findById((_a = req.user) === null || _a === void 0 ? void 0 : _a.id);
    if (!user) {
        res.status(401);
        throw new Error("User not found");
    }
    const ticket = yield ticketModel_1.default.findById(req.params.ticketId);
    if ((ticket === null || ticket === void 0 ? void 0 : ticket.user.toString()) !== ((_b = req.user) === null || _b === void 0 ? void 0 : _b.id)) {
        res.status(401);
        throw new Error("User not authorized");
    }
    const notes = yield noteModel_1.default.find({ ticket: req.params.ticketId });
    res.status(200).json(notes);
}));
// @desc    Create ticket note
// @route   POST /api/tickets/:ticketId/notes
// @access  Private
exports.addNote = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c, _d, _e;
    const user = yield userModel_1.default.findById((_c = req.user) === null || _c === void 0 ? void 0 : _c.id);
    if (!user) {
        res.status(401);
        throw new Error("User not found");
    }
    const ticket = yield ticketModel_1.default.findById(req.params.ticketId);
    if ((ticket === null || ticket === void 0 ? void 0 : ticket.user.toString()) !== ((_d = req.user) === null || _d === void 0 ? void 0 : _d.id)) {
        res.status(401);
        throw new Error("User not authorized");
    }
    const note = yield noteModel_1.default.create({
        text: req.body.text,
        isStaff: false,
        ticket: req.params.ticketId,
        user: (_e = req.user) === null || _e === void 0 ? void 0 : _e.id,
    });
    res.status(200).json(note);
}));
