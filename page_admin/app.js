import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import adminRoutes from "./routes/admin.js";
import chatbotRoutes from "./routes/chatbot.js";

dotenv.config();
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/admin", adminRoutes);
app.use("/chatbot", chatbotRoutes);

app.get("/", (req, res) => res.render("index"));

app.listen(process.env.PORT, () =>
  console.log(`🚀 Server running on http://localhost:${process.env.PORT}`)
);