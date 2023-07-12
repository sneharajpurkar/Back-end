const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Welcome users...")
})

app.get('/sneha', (req, res) => {
    res.send("I'm Sneha...")
})

app.get("/tanvi", (req, res) => {
    res.send("I'm Tanvi..")
})

app.listen(8001, () => {
    console.log("Running on port 8001");
})