import { Router } from "express";
import pool from "../utils/db/connect.js";

const authorsRouter = Router();

authorsRouter.get("/", async (req, res, next) => {
  try {
    const result = await pool.query(`SELECT * FROM authors;`);
    res.send(result.rows);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

authorsRouter.post("/", async (req, res, next) => {
  try {
    const result = await pool.query(
      `INSERT INTO authors(first_name,last_name) VALUES($1,$2) RETURNING *;`,
      [req.body.first_name, req.body.last_name]
    );
    res.send(result.rows[0]);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

export default authorsRouter;
