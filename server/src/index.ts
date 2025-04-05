import express from "express";
import "dotenv/config";
import chalk from "chalk";

const app = express();
const port = process.env.PORT;

app.get("/", (reg, res) => {
  res.send("Hello from the server side!");
});

// * Only start the server if not in test environment
// * This prevents the server from starting during tests
// >> START SERVER << //
if (process.env.NODE_ENV !== "test") {
  app.listen(port, () =>
    console.log(
      chalk.bgGreenBright(
        `Server is up and running @ http://localhost:${port}`,
      ),
    ),
  );
}

export default app;
