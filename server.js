import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoutes from "./routes/authRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";
import budgetRoutes from "./routes/budgetRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import insightRoutes from "./routes/insightRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json()); // req.body

app.get("/ping", (req, res) => {
  res.json({ message: "AI Expense Tracker API is running" });
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/categories", categoryRoutes);
app.use("/api/v1/transactions", transactionRoutes);
app.use("/api/v1/budgets", budgetRoutes);
app.use("/api/v1/dashboard", dashboardRoutes);
app.use("/api/v1/insights", insightRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});