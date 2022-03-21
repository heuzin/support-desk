"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const errorMidldleware_1 = require("./middleware/errorMidldleware");
const db_1 = require("./config/db");
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const ticketRoutes_1 = __importDefault(require("./routes/ticketRoutes"));
dotenv_1.default.config();
// Connect to database
(0, db_1.connectDB)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// Routes
app.use("/api/users", userRoutes_1.default);
app.use("/api/tickets", ticketRoutes_1.default);
if (process.env.NODE_ENV === "production") {
    const __dirname = path_1.default.resolve();
    app.use(express_1.default.static(path_1.default.join(__dirname, "/client/build")));
    app.get("*", (req, res) => {
        res.sendFile(path_1.default.resolve(__dirname, "client", "build", "index.html"));
    });
}
else {
    app.get("/", (req, res) => {
        res.send("API is running...");
    });
}
app.use(errorMidldleware_1.errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
