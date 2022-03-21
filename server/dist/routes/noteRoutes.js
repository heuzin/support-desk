"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const noteController_1 = require("../controllers/noteController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router({ mergeParams: true });
router.route("/").get(authMiddleware_1.protect, noteController_1.getNotes).post(authMiddleware_1.protect, noteController_1.addNote);
exports.default = router;
