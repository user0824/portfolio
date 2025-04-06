// ----------------------------------------------------------------------------------------
// >> SERVER << //
// ----------------------------------------------------------------------------------------

import express from "express";
import "dotenv/config";
import chalk from "chalk";

const app = express();
const port = process.env.PORT;

app.get("/", (reg, res) => {
  res.status(200).send("Hello from the server side! Time to go!");
});

// ----------------------------------------------------------------------------------------
// >> START SERVER << //
// ----------------------------------------------------------------------------------------
// * Only start the server if not in test environment
// * This prevents the server from starting during tests

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
