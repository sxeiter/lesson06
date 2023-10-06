'use strict'

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (names,prefix) => {
    let mr = [];
    for (let elem of names) {
        mr.push(prefix + " " + elem); 
    }
    return mr;
}

console.log(addPrefix(names, 'Mr'));