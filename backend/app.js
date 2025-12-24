import express from "express";
import {nanoid} from "nanoid";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/create", (req, res) => {
  const url = req.body;
  console.log(url);

  res.send({ id: nanoid(7) });
});

app.listen(3000, () => { 
  console.log("Server running on port 3000");
});