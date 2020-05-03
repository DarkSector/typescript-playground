"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumberCollection_1 = require("./NumberCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var numbersCollection = new NumberCollection_1.NumberCollection([10, 15, -5, 0]);
var charactersCollection = new CharactersCollection_1.CharactersCollection("yaXios");
var sorter = new Sorter_1.Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
var stringSorter = new Sorter_1.Sorter(charactersCollection);
stringSorter.sort();
console.log(stringSorter);
//# sourceMappingURL=index.js.map