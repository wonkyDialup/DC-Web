const cowsay = require("cowsay")
const express = require("express")
const app = express()
const port = 3000

  app.post('/sendCowUserName', (req, res) => {
    res.send(cowsay.say({
        text : "Sending Cow Username",
        e : "oO",
        T : "U "
    }));
  });  

  app.post('/sendCowAppointment', (req, res) => {
    res.send(cowsay.say({
        text : "Sending Cow Appointment",
        e : "oO",
        T : "U "
    }));
  });  

  app.get('/getCowUserName', (req, res) => {
    res.send(cowsay.think({
        text : "Getting Cow Username",
        e : "oO",
        T : "U "
    }));
  });  

  app.get('/getCowAppointment', (req, res) => {
    res.send(cowsay.think({
        text : "Getting Cow Appointment",
        e : "oO",
        T : "U "
    }));
  }); 

  app.delete('/deleteCowUser', (req, res) => {
    res.send(" ")
    console.log("Deleting Cow User")
        
  });

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
  });