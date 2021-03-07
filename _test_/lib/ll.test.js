'use strict';

const dawit = require('../../lib/ll.js');

describe('LINKED LIST', () => {
    it('should create an empty list on instantiation', () => {
        let list = new dawit();
        expect(list.head).toEqual(null);
        // expect(list).toBe(true);
        // expect(list).toBe(Object);
    })
    
    it('should add items to the list', () => {
     let list = new dawit();
     let first = 'first';
     let second = 'second';

     list.append(first); // add an item to the list
     expect(list.head.value).toEqual(first); //check that the item was added with our value

     list.append(second); // hint: check the next property in this test
     
     //3 and 4 are just to log data, no need to test that far
     list.append(3);
     list.append(4);
     console.log(list);
    })
})