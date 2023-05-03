import cors from "cors";
import express from "express";
import Connection from "./database/db.js";
import Routes from './routes/route.js';
const PORT = 5000;

const app = express();

app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }))

app.use("/", Routes);

Connection();

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
