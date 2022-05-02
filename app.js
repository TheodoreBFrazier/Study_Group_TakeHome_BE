// Create Dependecies 
const cors = require("cors"); // => Cors

const express = require("express") // => Express

const app = express() // => Configure the express application 

// Initializaition of middleware
app.use(cors());
app.use(express.json()); // -> Parson incoming JSON

// -----> Initialize a Route

app.get("/", (request, response) => {
    response.send("Hi - this route is working")
})


// EXPORT Application

module.exports = app;