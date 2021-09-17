const Sequelize = require('sequelize');
const { Users } = require('./models');
const express = require('express');
const app = express();
const PORT = 3011;

app.use(express.json());

app.post("/create_user", async (req, res) => {
    const { firstName, lastName, email } = req.body
    const newUser = await Users.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
    });
    res.send({
        id:newUser.id,
    })
});

app.post("/get_user", async (req, res) => {
    const users = await Users.findAll();
        res.send(users);
});

app.post("/update_user/:id", async (req, res) => {
    const users = await Users.update(req.params, {
        where: {
            id:req.params.id
        },
    });
        res.send(users);
});

app.post("/delete_user/:id", async (req, res) => {
    const users = await Users.destroy({
        where: {
            id:req.params.id
        },
    });
        res.send(users);
});

app.listen(PORT, console.log(`Listening on port ${PORT}`));