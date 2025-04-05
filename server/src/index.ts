import express from "express";
import "dotenv/config";

const app = express();
const port = process.env.PORT;

app.get("/", (reg, res) => {
  res.send("Hello from the server side!");
});

app.listen(port, () =>
  console.log(`Server is up and running @ http://localhost:${port}`),
);
