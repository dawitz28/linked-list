'use strict';

const LinkedList = require('./lib/ll.js');

let dawit = new LinkedList();

dawit.append('first');
dawit.append(2);
dawit.append('three');
dawit.append(4);

console.log(dawit);
