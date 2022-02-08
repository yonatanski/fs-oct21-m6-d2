import express from "express";
import authorsRoutes from "./services/authors.js";

const server = express();

const { PORT = 5001 } = process.env;

server.use(express.json());

server.use("/authors", authorsRoutes);

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

server.on("error", (error) => {
  console.log(`Server is stopped : ${error}`);
});
