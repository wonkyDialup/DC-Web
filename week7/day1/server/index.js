const express = require("express");
const app = express();
const PORT = 3009;

//  middleware
app.use(express.json());
//  middleware

// CREATE
app.post("/create_todo", (req,res) => {
    res.send("/create_todo");
});
// READ
app.get("/create_todo", (req,res) => {
    res.send("/create_todo");
});
// UPDATE
app.put("/create_todo", (req,res) => {
    res.send("/create_todo");
});
// DELETE
app.post("/create_todo", (req,res) => {
    res.send("/create_todo");
});


app.listen(PORT, console.log(`Listening on port ${PORT}`));