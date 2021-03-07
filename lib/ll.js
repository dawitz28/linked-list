'use strict';


//pull in the Node Class -> this will give us the ability
//to instantiate (add) new nodes to our linked list

const Node = require('./node.js');

class LinkedList {
    constructor() {
        this.head = null;
    }
    append(value) {
        let node = new Node(value); //{val: 20, next: null}

        if (!this.head) {     //(this.head === null) same thing
            this.head =node;
        } else {
            let current = this.head;

            while(current.next) {
                current = current.next;
            }

            current.next = node;
        }
    }
}

 LinkedList.append(10); {}

//first
//  { head: { val: 10, next: null }}
//  { head: { val: 10, next: {val: 20, next: null} }}


