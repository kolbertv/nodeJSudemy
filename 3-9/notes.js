console.log('staring notes.js');


const fs = require('fs');

let fetchNotes = () => {

    try {
        let noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
    } catch (e) {

        return [];
    }

};

let saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};


let addNote = (title, body) => {
    let notes = fetchNotes();
    let note = {
        title,
        body
    };

    let duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;

    } else {
        console.log('запись с  таким названием уже есть');
    }
};

let getAll = () => {
    let notes = fetchNotes();
    console.log(notes);
};

let getNote = (title) => {

    let notes = fetchNotes();
    let getNote = notes.filter((note) => note.title === title);
    return getNote;

};

let removeNote = (title) => {

    let note = {
        title,
    };

    let notes = fetchNotes();

    let filterNotes = notes.filter((note) => {
        return note.title !== title;
    });
    console.log("--");
    console.log(filterNotes);
    saveNotes(filterNotes);
    return notes.length !== filterNotes.length;
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};