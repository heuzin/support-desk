"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ticketsController_1 = require("../controllers/ticketsController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const noteRoutes_1 = __importDefault(require("./noteRoutes"));
const router = express_1.default.Router();
router.use("/:ticketId/notes", noteRoutes_1.default);
router.route("/").get(authMiddleware_1.protect, ticketsController_1.getTickets).post(authMiddleware_1.protect, ticketsController_1.createTicket);
router
    .route("/:id")
    .get(authMiddleware_1.protect, ticketsController_1.getTicket)
    .put(authMiddleware_1.protect, ticketsController_1.updateTicket)
    .delete(authMiddleware_1.protect, ticketsController_1.deleteTicket);
exports.default = router;
