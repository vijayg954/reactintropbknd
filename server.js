import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import DbConnect from "./config/Db.js";

import oneLinerRoutes from "./routes/oneLinerroutes.js";
import quizRoutes from "./routes/quizRoutes.js";

import dns from "node:dns/promises";
dns.setServers(["1.1.1.1"]);

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
DbConnect();
const PORT = process.env.PORT || 3001;

// Routes
app.get("/", (req, res) => {
  res.send("Backend is running");
});
app.use("/api/v1/raectintro/oneliner", oneLinerRoutes);

app.use("/api/v1/raectintro/quiz", quizRoutes);
// app.use("/api/v1/class12eng2/quiz", quizRoutes);
// app.use("/api/v1/enggrammar/quiz", quizRoutes);
// app.use("/api/v1/poems/quiz", quizRoutes);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`App is listening on ${PORT}`);
});