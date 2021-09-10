require("dotenv").config();
const PORT = 3001;
const express = require("express");
const token = process.env.API_TOKEN;
const URL = process.env.supabaseUrl;
const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(URL, token);

const app = express();

// middleware starts
app.use(express.json());
// middleware ends



app.post("/createStock", async (req, res) => {
  const { data, error } = await supabase.from("stockInfo").insert(req.body);
  console.log(`New stock added for: ${req.body.name}`);
  res.send(data)
});

app.get("/viewStock", async (req, res) => {
  const { data, error } = await supabase.from("stockInfo").select();
  console.log(`Here's the information about: ${req.body.name}`);
  res.send(data);
});

app.get("/viewStockID/:id", async (req,res) => {
    const id = req.body.id
    const { data, error} = await supabase.from("stockInfo").select(id);
    console.log(`Here's the information about: ${req.body.name}`);
    res.send(data)
});

app.put("/updateStock/:id", async (req, res) => {
  const id = req.params.id;
  const { data, error } = await supabase
    .from("stockInfo")
    .update(req.body)
    .match({ id: id });
    console.log(`The following stock has been updated: ${req.body.name}`);
    res.send(data);
});

app.put("/updateStock/:name", async (req, res) => {
    const name = req.params.name;
    const { data, error } = await supabase
      .from("stockInfo")
      .update(req.body)
      .match({ name: name });
      console.log(`The following stock has been updated: ${req.body.name}`);
      res.send(data);
  });

app.delete("/deleteStock/:id", async (req, res) => {
  const id = req.params.id;
  const { data, error } = await supabase
    .from("stockInfo")
    .delete()
    .match({ id: id });
    console.log(`The following stock has been deleted: ${req.body.name}`);
    res.send(data);
});

app.listen(PORT, console.log(`listening on ${PORT}`));