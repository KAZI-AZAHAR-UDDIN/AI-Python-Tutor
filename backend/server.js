import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import aiRoutes from "./routes/aiRoutes.js";
import { connectDB } from "./config/db.js"
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());


app.use("/api/ai", aiRoutes);


// Serve React static files in production
if (process.env.NODE_ENV === "production") {
    // Set up the static file serving for the frontend
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
  
    // Handle all routes by sending the index.html file of the React app
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
  }

app.listen(PORT, () => {
    console.log("Server is running on http://localhost:" + PORT);
    connectDB();
});

