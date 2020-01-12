const express = require('express');

const app = express();

const port = 4000;

app.get("/", (req, res) => {
    const string = "something to send"
    res.send(string)
});



app.listen(port, () => console.log("listening here" + port));