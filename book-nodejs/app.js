const express = require("express");

const app = express();

var cors = require("cors");

const port = 4000;

// database
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://root:root@db-cluster-jivnd.gcp.mongodb.net/book-app?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Running mongodb"))
  .catch(err => console.log(err));

//allow cors permission
app.use(cors());

//Json for express
app.use(express.json());

const books = require("./routes/books");

app.use("/api/books", books);

app.listen(port, () => console.log("listening here " + port));
