const Pool = require("pg").Pool;
// replace database with the name of your local database on on your computer
const creds = new Pool({
  host: "localhost",
  port: 5432,
  database: "todolist",
  user: "",
  password: "${PASSWORD}",
});

module.exports = creds;