// let obj = {
//     name: 'Vladimir'
// };
//
// let stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// let personString = '{"name": "Vladimir","age":100}';
//
// let person  = JSON.parse(personString);

const  fs = require('fs');

let originalNote = {
    title: ' some title',
    body: ' some body'
};


let originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);


let noteString = fs.readFileSync('notes.json');
let note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);


