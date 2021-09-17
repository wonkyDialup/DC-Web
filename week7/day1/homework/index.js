const express = require('express')
const app = express()
const creds = require("./db")
const PORT = 3009

//middleware
app.use(express.json())
//middleware

app.post("/createRestaurant", (req, res) => {
    creds.connect((err, client, release) => {
      if (err) {
        return console.error("Error getting connected!", err.stack);
      }
      client.query(
        `INSERT INTO restaurant (name) VALUES ('${req.body.name}');`,
        (err, result) => {
          if (err) {
            res.status(400).send(err.stack);
          }
          res.status(200).send(result);
        }
      );
    });
  });

app.get('/restaurantNames', (req, res) =>{
    creds.connect((err, client, release) => {
        if (err) {
            return console.error("Error getting connected!", err.stack);
        }
        client.query("SELECT * FROM restaurant", (err, result) => {
            if (err) {
                res.status(400).send(err.stack);
            }
            res.status(200).send(result.rows)
        })
    })
})

app.post('/createMovie', (req, res) =>{
    creds.connect((err, client, release) => {
        if (err){
            return console.error("Error getting connected!", err.stack);
        }
        client.query(`INSERT INTO movies (name) VALUES ('${req.body.name}');`,
        (err, result) => {
            if (err) {
                res.status(400).send(err.stack);
              }
              res.status(200).send(result);
             
        })
    })
})


app.get('/movieNames', (req, res) =>{
    creds.connect((err, client, release) => {
        if (err) {
            return console.error("Error getting connected!", err.stack);
        }
        client.query("SELECT * FROM movies", (err, result) =>{
            if (err) {
                res.status(400).send(err.stack);
            }
            res.status(200).send(result.rows)
        })
    })
})



app.listen(PORT, console.log(`${PORT}`))