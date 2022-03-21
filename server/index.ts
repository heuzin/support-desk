import path from "path";
import express from "express";
import dotenv from "dotenv";
import { errorHandler } from "./middleware/errorMidldleware";
import { connectDB } from "./config/db";
import userRoutes from "./routes/userRoutes";
import ticketRoutes from "./routes/ticketRoutes";

dotenv.config();

// Connect to database
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/users", userRoutes);
app.use("/api/tickets", ticketRoutes);

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
