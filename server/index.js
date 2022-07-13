const express = require("express");

const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.unsubscribe(express.json());

app.listen(5000, () => {
    console.log("server has started on port 5000");
});

app.get("/todoItems", async(req, res) => {
  // get todo items
  try {
	const allTodos = await pool.query("SELECT * FROM todo");
	res.json(allTodos.rows)
	} catch (err) {
	console.error(err.message);
 }
});

