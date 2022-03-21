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
exports.updateTicket = exports.deleteTicket = exports.createTicket = exports.getTicket = exports.getTickets = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const userModel_1 = __importDefault(require("../models/userModel"));
const ticketModel_1 = __importDefault(require("../models/ticketModel"));
// @desc    Get user tickets
// @route   GET /api/tickets
// @access  Private
exports.getTickets = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const user = yield userModel_1.default.findById((_a = req.user) === null || _a === void 0 ? void 0 : _a.id);
    if (!user) {
        res.status(401);
        throw new Error("User not found");
    }
    const tickets = yield ticketModel_1.default.find({ user: (_b = req.user) === null || _b === void 0 ? void 0 : _b.id });
    res.status(200).json(tickets);
}));
// @desc    Get user ticket
// @route   GET /api/tickets/:id
// @access  Private
exports.getTicket = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c, _d;
    const user = yield userModel_1.default.findById((_c = req.user) === null || _c === void 0 ? void 0 : _c.id);
    if (!user) {
        res.status(401);
        throw new Error("User not found");
    }
    const ticket = yield ticketModel_1.default.findById(req.params.id);
    if (!ticket) {
        res.status(404);
        throw new Error("Ticket not found");
    }
    if (ticket.user.toString() !== ((_d = req.user) === null || _d === void 0 ? void 0 : _d.id)) {
        res.status(401);
        throw new Error("Not Authorized");
    }
    res.status(200).json(ticket);
}));
// @desc    Create new ticket
// @route   POST /api/tickets
// @access  Private
exports.createTicket = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _e, _f;
    const { product, description } = req.body;
    if (!product || !description) {
        res.status(400);
        throw new Error("Please add a product and description");
    }
    const user = yield userModel_1.default.findById((_e = req.user) === null || _e === void 0 ? void 0 : _e.id);
    if (!user) {
        res.status(401);
        throw new Error("User not found");
    }
    const ticket = yield ticketModel_1.default.create({
        product,
        description,
        user: (_f = req.user) === null || _f === void 0 ? void 0 : _f.id,
        status: "new",
    });
    res.status(201).json(ticket);
}));
// @desc    Delete ticket
// @route   DELETE /api/tickets/:id
// @access  Private
exports.deleteTicket = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _g, _h;
    const user = yield userModel_1.default.findById((_g = req.user) === null || _g === void 0 ? void 0 : _g.id);
    if (!user) {
        res.status(401);
        throw new Error("User not found");
    }
    const ticket = yield ticketModel_1.default.findById(req.params.id);
    if (!ticket) {
        res.status(404);
        throw new Error("Ticket not found");
    }
    if (ticket.user.toString() !== ((_h = req.user) === null || _h === void 0 ? void 0 : _h.id)) {
        res.status(401);
        throw new Error("Not Authorized");
    }
    yield ticket.remove();
    res.status(200).json({ success: true });
}));
// @desc    Udate ticket
// @route   PUT /api/tickets/:id
// @access  Private
exports.updateTicket = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _j, _k;
    const user = yield userModel_1.default.findById((_j = req.user) === null || _j === void 0 ? void 0 : _j.id);
    if (!user) {
        res.status(401);
        throw new Error("User not found");
    }
    const ticket = yield ticketModel_1.default.findById(req.params.id);
    if (!ticket) {
        res.status(404);
        throw new Error("Ticket not found");
    }
    if (ticket.user.toString() !== ((_k = req.user) === null || _k === void 0 ? void 0 : _k.id)) {
        res.status(401);
        throw new Error("Not Authorized");
    }
    const updatedTicket = yield ticketModel_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedTicket);
}));
