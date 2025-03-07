import { getDatabase } from "./database";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  const database = getDatabase();
  database.find({}, (err, data) => {
    if (err) return res.status(500).json(err);
    res.json(data);
  });
});

export default app;