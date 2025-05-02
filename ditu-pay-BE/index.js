import express from 'express';
import connectDB from './db.js'; // Importing the connectDB function


const app = express();
const port = 3001;

connectDB(); // Call the connectDB function

app.post('/signup', (req, res) => {
    res.send('Hello World!');
})

app.get('/login', (req, res) => {
    res.send('Hello World!');
})

app.put('/updateuser', (req, res) => {
    res.send('Hello World!');
}) 
 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
});

//57-