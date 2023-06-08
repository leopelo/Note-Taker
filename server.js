const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

const PORT = process.env.PORT || 3001;
const app = express();
const router = app.Router();
//middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

//get route for notes page
app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, './public/notes.html')));


//get route for home page
app.get('*', (req, res) =>
res.sendFile(path.join(__dirname, './public/index.html')));


app.listen(PORT, () => 
console.log(`App listenting at http://localhost:${PORT}`));


