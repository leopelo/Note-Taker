const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

//GET route for retrieving all notes
notes.get('*', (req, res) => {
    console.info(`${req.method} request received for notes from database`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

//POST route for new note
notes.post('*', (req, res) => {
    console.info(`${req.method} request received to add a note`);
    console.log(req.body);

    const { title, text } = req.body;
  
    if (req.body) {
      const newNote = {
        title,
        text,
        id: uuid(),
      };
  
      readAndAppend(newNote, './db/db.json');
      res.json(`Note added successfully 🥹`);
    } else {
      res.json('Error in adding note');
    }
  });
//DELETE route for note
  notes.delete('/:id', (req, res) => {
  console.log(req.params.id)
  
});

  
  module.exports = notes;
  