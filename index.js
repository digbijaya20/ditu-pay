const express = require('express');
const app = express();
const port = 3000;

app.post('/signup', (req, res) => {
    res.send('Hello World!');
})

app.get('/login', (req, res) => {
    res.send('Hello World!');
})

app.put('/updateuser', (req, res) => {
    res.send('Hello World!');
})
 

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});