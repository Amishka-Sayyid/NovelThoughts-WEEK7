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

// ---------------------------------
//creating routes to insert data

// novels
app.post("/noveldata", async (req, res) => {
  console.log("This is the novel data", req.body);

  const { formValues } = req.body;

  const { src, title, author, synopsis } = formValues;

  const query = await db.query(
    `INSERT INTO novels(src,title,author,synopsis) 
         VALUES ($1, $2, $3,$4) RETURNING *`,
    [src, title, author, synopsis]
  );

  res.json({
    message: "novel data inserted successfully!",
    newData: query.rows[0],
  });
});

// userComments
app.post("/commentdata", async (req, res) => {
  console.log("This is the user comments data", req.body);

  const { formValues } = req.body;

  const { username, email, comment, booksId } = formValues;

  const query = await db.query(
    `INSERT INTO userComments(username,email,comment,booksId)
           VALUES ($1, $2, $3,$4) RETURNING *`,
    [username, email, comment, booksId]
  );

  res.json({
    message: "user comment inserted successfully!",
    newData: query.rows[0],
  });
});

// --------------------------------
//creating routes to update data

//updating user comment
app.put("/update-comment/:id", async (req, res) => {
  const updateData = req.body;

  const paramsToUpdateComment = req.params;

  const query = await db.query(
    `UPDATE userComments SET username= $1, email= $2, comment= $3, booksId= $4 WHERE id= $5`,
    [
      updateData.username,
      updateData.email,
      updateData.comment,
      updateData.booksId,
      paramsToUpdateComment.id,
    ]
  );
  res.json({ message: "user comment data updates!!!" });
});
