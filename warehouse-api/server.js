const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const warehouses = [];
app.post("/api/warehouses", (req, res) => {
  console.log(req.body);

  // Save the warehouse data
  warehouses.push(req.body);
  console.log(warehouses);
  res.sendStatus(201);
});



app.get("/", (req, res) => {
  res.send("Welcome to the Warehouse API!");
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
