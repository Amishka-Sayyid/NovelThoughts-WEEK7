//import packages
import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

//start or configure packages
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

//create a root route
app.get("/", (req, res) => {
  res.send("This is the root route!");
});

//set up a port for the server by listening...
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// -------------------------------
//creating db pool
const dbConnectionString = process.env.DATABASE_URL;
export const db = new pg.Pool({
  connectionString: dbConnectionString,
});

// ----------------------------------

// from here all routes
// read routes

//route to read data from novels
app.get("/novels", async (req, res) => {
  const result = await db.query("SELECT * FROM novels");
  res.json(result.rows);
});

//route to read data from userComments
app.get("/userComments", async (req, res) => {
  const result = await db.query("SELECT * FROM userComments");
  res.json(result.rows);
});
