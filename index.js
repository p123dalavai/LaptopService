const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

let laptop = fs.readFileSync('./assets/data/laptops.json');

var app = express();
app.use(bodyParser.json());

const laptopRoutes = require("./src/routes/LaptopRoute");

app.use("/api", laptopRoutes);

const port = 3034;
app.listen(port,()=>{
    console.log("Server is running at port 3034...");
});