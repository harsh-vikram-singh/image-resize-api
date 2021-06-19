import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(morgan("common"));

app.get("/", (req, res) => {
  res.send("succfully accessed GET /");
});

app.listen(port, () => {
  console.log("Welcome to image resize service");
});
