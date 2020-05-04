"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberCollection_1 = require("./NumberCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
// const numbersCollection = new NumberCollection([10, 15, -5, 0]);
//
// const charactersCollection = new CharactersCollection("yaXios");
//
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);
//
//
// const stringSorter = new Sorter(charactersCollection);
// stringSorter.sort();
// console.log(stringSorter);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(3);
linkedList.sort();
linkedList.print();
var numbersCollection = new NumberCollection_1.NumberCollection([10, 15, -5, 0]);
numbersCollection.sort();
var charactersCollection = new CharactersCollection_1.CharactersCollection("yaXios");
charactersCollection.sort();
console.log(numbersCollection.data);
console.log(charactersCollection.data);
//# sourceMappingURL=index.js.map