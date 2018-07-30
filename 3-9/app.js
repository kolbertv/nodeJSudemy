"use strict";

console.log('starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');


const notes = require('./notes.js');

const argv = yargs.argv; //process.argv
let command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv);


if (command === 'add') {

    let note = notes.addNote(argv.title, argv.body);
    if (typeof note === "object") {
        console.log('запись добавлена');
        console.log('--');
        console.log('title: ' + note.title)
    } else {
        console.log('запись не добавлена');
    }

} else if (command === 'list') {

    notes.getAll();

} else if (command === 'read') {
    debugger;
    let getNote = notes.getNote(argv.title);
    let message = getNote.length ? getNote : 'Note not found';
    console.log(message);

} else if (command === 'remove') {

    let noteremoved = notes.removeNote(argv.title);
    let message = noteremoved ? 'Note was removed' : 'Note not found';
    console.log(message);

} else {
    console.log('Command not recognized');

}


