// console.log("sneha")
// console.log("tanu")

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Sneha');
});

app.get('/monday', (req, res) => {
    res.send('Hello, Monday')
})



app.listen(8000, () => {
    console.log('Server is running on port 000');
})
