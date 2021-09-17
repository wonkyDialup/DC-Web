const Sequelize = require('sequelize');
const { todos } = require('./models');
const express = require('express');
const app = express();
const PORT = 3012;

app.use(express.json());
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
es6Renderer = require('express-es6-template-engine')
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

app.post("/create_task", async (req, res) => {
    const { task, urgency, name } = req.body
    const newTask = await todos.create({
        task: task,
        urgency: urgency,
        name: name,
    });
    res.send({
        id:newTask.id,
    })
});

app.post("/get_task", async (req, res) => {
    const todos = await todos.findAll();
        res.send(todos);
});

app.post("/update_task/:id", async (req, res) => {
    const todos = await todos.update(req.params, {
        where: {
            id:req.params.id
        },
    });
        res.send(todos);
});

app.post("/delete_task/:id", async (req, res) => {
    const todos = await todos.destroy({
        where: {
            id:req.params.id
        },
    });
        res.send(todos);
});

app.listen(PORT, console.log(`Listening on port ${PORT}`));